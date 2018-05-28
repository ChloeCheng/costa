

const getUrl = require('./getPageUrl.js')

/**
 * 获取指定的cookie，并拼装成字符串
 * 用于发送请求时，添加到header
 * @method getCookies
 */
const cookieKeys = ['session_id']

function getCookies() {
  var cookieStr = '';
  cookieKeys.map(function (key) {
    var value = wx.getStorageSync(key) ;
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
  header['Cookie'] = getCookies() ;
  return header;
}

/**
 * 重新封装小程序的wx.request()
 * @method setRequestHeader
 * @param {object} currentHeader 当前请求头
 */
exports.request =  function(url,param, success, failed, complete) {
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
        // 未登录
        if(res.statusCode === 400){
          var pages = getCurrentPages() 
          var currentPage = pages[pages.length - 1]
          wx.navigateTo('/pages/login/index?callbackUrl=' + encodeURIComponent(getUrl.getCurrentPageUrlWithArgs()))
        }
        fail && fail(JSON.parse(res.data));
      }
    },
    fail: function (err) {
      failed && failed(err);
    },
    complete: function (res) {
      complete && complete(res);
    }
  });
}
