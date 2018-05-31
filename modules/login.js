const app = getApp()
const storage = require('./storage.js')
const ajax = require('./ajax.js')
const getUrl = require('./getPageUrl.js')

// 入口统一是否登录判断
exports.checkLogin = function () {
  var session_id = wx.getStorageSync('session_id')
  if (session_id) {
    // 登录态检查
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
        goRegister()
      },
      fail: function () {
        login()
      }
    });
  } else {
    login()
  }
}

function goRegister(){
  var is_registered = wx.getStorageSync('is_registered')
  if (is_registered == 'false') {
    // 未注册
    var callbackUrl = encodeURIComponent(getUrl.getCurrentPageUrlWithArgs())
    var currentUrl = getUrl.getCurrentPageUrl()
    if (currentUrl.includes('pages/login/index')){
      return
    }
    wx.redirectTo({ url: '/pages/login/index?callbackUrl=' + callbackUrl })
  }
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

function thirdLogin(code, encryptedData, iv, option) {
  var url = "eeee/xxx/login/ttttt";
  var params = new Object();
  params.code = code;
  params.encryptedData = encryptedData;
  params.iv = iv;
  params.option = option
  console.log(params)

  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    params,
    function (json) {
      json = {
        code: 200,
        data:{
          name:'2112'
        },
        msg:'ERROR'
      }

      if (json.code == 200) {
        console.log('登录成功')
        wx.setStorageSync('session_id', (new Date()).toString())
        wx.setStorageSync('is_registered', 'true')
      } else if (json.code == 400) {
        wx.setStorageSync('session_id', (new Date()).toString())
        // 未注册
        wx.setStorageSync('is_registered', 'false')
        goRegister()
      }
      console.log('my  login successd........');
    },
    function (res) {
      wx.setStorageSync('session_id', '')
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
