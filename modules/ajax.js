

const getUrl = require('./getPageUrl.js')
const cookieKeys = ['JSESSIONID']
const hostUrl = 'http://costa.slashsoft.cn'

var ajaxFlag = ''
var countFlag = 0

function ajaxLogin(url, data) {
  if (url.indexOf('/wechat-mp/oauth') == -1) {
    if (data && (data.code == 403 || data.code == 401 || data.code == 400 || data.code == 405)) {
      // wx.setStorageSync('is_login','false')
      // return
      countFlag++;
      if (countFlag < 10) {
        var callbackUrl = wx.getStorageSync('callbackUrl')
        clearTimeout(ajaxFlag)
        ajaxFlag = setTimeout(() => {
          wx.reLaunch({
            url: "/" + callbackUrl,
          })
        }, 1000)
      }
    }
  }
}

/**
 * 获取指定的cookie，并拼装成字符串
 * 用于发送请求时，添加到header
 * @method getCookies
 */
function getCookies() {
  // var cookieStr = '';
  // cookieKeys.map(function (key) {
  //   var value = wx.getStorageSync(key);
  //   cookieStr += key + '=' + value //+ ';';
  // });
  var cookieStr = wx.getStorageSync('JSESSIONID')
  return cookieStr;
}

/**
 * 由于小程序不支持cookie，为了兼容后端原有的接口功能，需自行拼装header
 * @method setRequestHeader
 * @param {object} currentHeader 当前请求头
 */
function setRequestHeader() {
  var header = {}
  header['content-type'] = header['content-type'] || 'application/x-www-form-urlencoded' || 'application/json' ;
  header['Cookie'] = getCookies();
  return header;
}

exports.checkRequest = function(callback){
  wx.checkSession({
    success: function () {
      //session_key 未过期，并且在本生命周期一直有
      goRegister(callback)
    },
  })
  var is_login = wx.getStorageSync('is_login')
  callback()
}

/**
 * 重新封装小程序的wx.request()
 * @method setRequestHeader
 * @param {object} currentHeader 当前请求头
 */
exports.request = function (url, param = {}, success, failed, complete) {
  var _url = url
  if(url.indexOf('http')==-1){
    url = hostUrl + url
  }
  wx.showLoading({
    title: 'loading'
  })
  param.language = wx.getStorageSync('language') == 'en' ?'en':'cn'
  wx.request({
    url: url,
    data: param,
    method: param.method || 'GET',
    header: setRequestHeader(), // 设置请求的 header
    dataType: 'application/x-www-form-urlencoded',
    success: function (res) {
      if (res.statusCode == 200) {
        if (url.indexOf('wechat-mp/oauth')> -1) {
          if (res.header['Set-Cookie']){
            wx.setStorageSync('JSESSIONID', res.header['Set-Cookie'])
          }
        }
        var data = JSON.parse(res.data)
        ajaxLogin(_url, data)
        success(data)
      } else {
        // 未注册
        // if (res.statusCode === 400) {
        //   var pages = getCurrentPages()
        //   var currentPage = pages[pages.length - 1]
        //   wx.navigateTo('/pages/login/index?callbackUrl=' + encodeURIComponent(getUrl.getCurrentPageUrlWithArgs()))
        // }
        failed && failed(JSON.parse(res.data));
        wx.showModal({
          showCancel:false,
          content: JSON.parse(res.data).msg ||'网络请求异常，请重试',
        })
      }
    },
    fail: function (err) {
      failed && failed(err);
      wx.showToast({
        title: '网络请求异常，请重试',
        icon: 'none',
        duration: 2000
      })
    },
    complete: function (res) {
      complete && complete(res);
      wx.hideLoading({
        title: 'loading'
      })
    }
  });
}
