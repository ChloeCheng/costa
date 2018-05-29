

const getUrl = require('./getPageUrl.js')
const cookieKeys = ['session_id']

/**
 * 获取指定的cookie，并拼装成字符串
 * 用于发送请求时，添加到header
 * @method getCookies
 */
function getCookies() {
  var cookieStr = '';
  cookieKeys.map(function (key) {
    var value = wx.getStorageSync(key);
    cookieStr += key + '=' + value + ';';
  });
  return cookieStr;
}

/**
 * 由于小程序不支持cookie，为了兼容后端原有的接口功能，需自行拼装header
 * @method setRequestHeader
 * @param {object} currentHeader 当前请求头
 */
function setRequestHeader() {
  var header = {}
  header['content-type'] = header['content-type'] || 'application/json';
  header['Cookie'] = getCookies();
  return header;
}

/**
 * 重新封装小程序的wx.request()
 * @method setRequestHeader
 * @param {object} currentHeader 当前请求头
 */
exports.request = function (url, param = {}, success, failed, complete) {
  wx.showLoading({
    title: 'loading'
  })
  param.language = wx.getStorageSync('language') || 0
  wx.request({
    url: url,
    data: param,
    method: param.method || 'GET',
    header: setRequestHeader(), // 设置请求的 header
    dataType: 'application/x-www-form-urlencoded',
    success: function (res) {
      if (res.statusCode == 200) {
        success(JSON.parse(res.data))
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
