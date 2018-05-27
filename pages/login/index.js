// pages/login/index.js
const app = getApp()
const date = require('../../modules/dateFormat.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']].login,
    'currentLanguage': app.global.currentLanguage,
    date: date.dateFormat(new Date(),'yyyy-MM-dd'),
    code:'',
    tel:'',
    checked:false,
  },
  changeLanguage() {
    app.global.currentLanguage = (app.global.currentLanguage === 'zh' ? 'en' : 'zh');
    this.setData({
      'currentLanguage': app.global.currentLanguage,
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentData: app.global[app.global['currentLanguage']].login,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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