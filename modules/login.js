
const storage = require('./storage.js')
const ajax = require('./ajax.js')
const getUrl = require('./getPageUrl.js')
const app = getApp()

// 入口统一是否登录判断
exports.checkLogin = function (callback = () => { }) {
  var session_id = wx.getStorageSync('JSESSIONID')
  if (session_id) {
    // 登录态检查
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有
        goRegister(callback)
      },
      fail: function () {
        login()
      }
    });
  } else {
    login()
  }
}

function goRegister(callback) {
  var is_registered = wx.getStorageSync('is_registered')
  if (is_registered == 'false') {
    // 未注册
    var callbackUrl = wx.getStorageSync('callbackUrl')
    if (callbackUrl.includes('pages/login/index')) {
      return
    }
    wx.reLaunch({ 
     url: '/pages/login/index?callbackUrl=' + encodeURIComponent(callbackUrl) 
     })
  }
  callback && callback()
}

function login(option) {
  console.log('用户是否授权..........');
  /// 是否需要用户授权待定？？？？
  checkAuth(function (json) {
    if (json.auth) {
      //调用登录接口
      wx.login({
        success: function (e) {
          console.log('get code successd........');
          var code = e.code;
          wx.getUserInfo({
            success: function (res) {
              console.log('wxgetUserInfo successd........');
              var encryptedData = encodeURIComponent(res.encryptedData);
              thirdLogin(code, encryptedData, res.iv, option);//调用服务器api
            }
          })
        }
      });
    }
  })
}

function thirdLogin(code) {
  ajax.request(
    '/wechat-mp/oauth/' + encodeURIComponent(code),
    {},
    function (json) {
      // json = {
      //   code: 200,
      //   data:{
      //     session_id:'111',
      //     is_registered:'true'
      //   },
      //   msg:'ERROR'
      // }

      if (json.code == 200) {
        console.log('登录成功')
        wx.setStorageSync('JSESSIONID', json.data.session_id)
        if (json.data.is_register == false) {
          // 未注册
          wx.setStorageSync('is_registered', 'false')
          goRegister()
        } else {
          wx.setStorageSync('is_registered', 'true')
        }
      }
      console.log('my  login successd........');
    },
    function (res) {

      // getApp().globalData.session_id = 'failed';
      // getApp().globalData.uid = 'failed';
      // getApp().globalData.isLogin = 'failed';
      console.log('my  login failed........');
    }
  )

}

// 检查是否授权
function checkAuth(callback) {
  wx.getSetting({
    success(res) {
      if (!res['scope.userInfo']) {
        wx.authorize({
          scope: 'scope.userInfo',
          fail: function (err) {
            callback && callback({ auth: false });
            console.log('未授权，失败' + JSON.stringify(err));
          },
          success: function () {
            callback && callback({ auth: true });
          }
        })
      } else {
        callback && callback({ auth: true });
      }
    },
    fail: function (err) {
      console.log('checkAuth fail!!!!')
    }
  })
}
