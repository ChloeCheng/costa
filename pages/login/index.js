// pages/login/index.js
const app = getApp()
const date = require('../../modules/dateFormat.js');
const login = require('../../modules/login.js');
const Dialog = require('../../components/vendor/dist/dialog/dialog');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorizeUserInfo: true,
    currentData: app.global[app.global['currentLanguage']].login,
    'currentLanguage': app.global.currentLanguage,
    date: date.dateFormat(new Date(),'yyyy-MM-dd'),
    code:'',
    tel:'',
    checked:false,
    secondFlag:-1,
  },
  changeLanguage() {
    app.global.currentLanguage = (app.global.currentLanguage === 'zh' ? 'en' : 'zh');
    wx.setStorageSync('language', app.global.currentLanguage == 'zh' ? 0 : 1)
    this.setData({
      'currentLanguage': app.global.currentLanguage,
      currentData: app.global[app.global['currentLanguage']].login,
    });
  },
  switchCheck(){
    this.setData({
      checked: !this.data.checked
    })
  },
  bindTelInput:function(e){
    this.setData({
      tel: e.detail.value
    })
  },
  bindCodeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  sendSMS(){
    if (this.data.secondFlag != -1){
      return
    }
    var SECOND_COUNT = 60;
    this.setData({
      secondFlag: SECOND_COUNT
    })
    var timeSecond = setInterval(()=>{
      if (this.data.secondFlag == -1){
        clearInterval(timeSecond)
        return
      }
      this.setData({
        secondFlag: (this.data.secondFlag - 1)
      })
    },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentData: app.global[app.global['currentLanguage']].login,
    })
    var _this = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.dir(res.userInfo)
              _this.setData({
                'userInfo': res.userInfo
              });
            }
          })
        } else {
          _this.setData({
            'authorizeUserInfo': false
          });
        }
      },
      fail: function (err) {
        console.log('checkAuth fail!!!!')
      }
    })
  },
  getuserinfo: function (e) {
    let _this = this;
    let detail = e.detail;

    if (detail.errMsg == 'getUserInfo:ok') {
      this.setData({
        'authorizeUserInfo': true
      });
      wx.getUserInfo({
        success: function (res) {
          _this.setData({
            'userInfo': res.userInfo
          });
          //login.login()
        }
      })
    }
  },
  gotoLogin(){
    if(this.data.tel == ""){
      Dialog({
        title: '',
        message: '请输入手机号码',
        selector: '#zan-dialog-test'
      })
    }
    else if (this.data.code == "") {
      Dialog({
        title: '',
        message: '请输入短信验证码',
        selector: '#zan-dialog-test'
      })
    }else{
      login.login({
        tel: this.data.tel,
        code: this.data.code,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //login.checkAuth()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  openSetting() {
    wx.openSetting({
      success: function (res) {
        if (res && res.authSetting && res.authSetting['scope.userInfo']) {

        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})