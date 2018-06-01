const ajax = require('../../modules/ajax.js')
const getUrl = require('../../modules/getPageUrl.js')

exports.register = function (option, callback) {
  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    option,
    function (json) {
      json = {
        code: 200
      }
      if (json.code == 200) {
        wx.setStorageSync('is_registered', 'true')
        wx.showModal({
          showCancel: false,
          content: '注册成功',
          success: function (res) {
            var url = getUrl.getCallbackUrl()
            wx.redirectTo({
              url: '/' + url,
            })
          }
        })
      }
    }
  )
}

exports.sendSms = function (num, callback) {
  ajax.request(
    '/wechat-mp/customer/register-get-code/' + num,
    {},
    function (json) {
    }
  )
}