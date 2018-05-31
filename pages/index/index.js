const app = getApp();
const login = require('../../modules/login.js');
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');

Page({
  data: {
    bannerList: [{
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/u\/1804\/2018042316385234.jpg",
      "url": "\/pages\/activity\/summer\/index"
    }, {
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/banner_1.png",
      "url": ""
    }],
    authorizeUserInfo: false,
    userInfo: app.global.wxUserInfo,
    currentLanguage: app.global.currentLanguage || 'zh',
    showCode: false,
    showPhone: false,
    currentData: app.global[app.global['currentLanguage']].home,
    currentBarDate: app.global[app.global['currentLanguage']],

  },
  onLoad: function () {
    let _this = this;
    console.log(app.global.currentLanguage)
    let url = `${URL.default.home.userInfo}?language=cn`;
    ajax.request(
      url,
      {language: app.global.currentLanguage === 'zh' ? 'cn' : 'en'},
      function(data){
        console.log(data)
      }
     )
  },
  updateInfo: function (){
    this.setData({
      'userInfo': app.global.wxUserInfo
    });
    login.checkLogin()
  },
  changeLanguage(){
    app.global.currentLanguage = (app.global.currentLanguage === 'zh' ? 'en' : 'zh');
    wx.setStorageSync('language', app.global.currentLanguage)
    this.setData({
      'currentLanguage': app.global.currentLanguage,
      'currentData': app.global[app.global['currentLanguage']].home,
      'currentBarDate': app.global[app.global['currentLanguage']]
    });
  },
  codeOperater(){
    let code = this.data.showCode;
    this.setData({
      'showCode': !code
    });
  },
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: '400-060-1971'
    })
  },
  showPhone(){
    let code = this.data.showPhone;
    this.setData({
      'showPhone': !code
    });
  },
  gotoPage: function(e){
    let url = e.currentTarget.dataset.detail;
    if(url){
      wx.navigateTo({
        url: url,
      })
    }   
  },
  gotoEdit() {
    let url = '/pages/userInfo/index';
    if(url) {
      wx.navigateTo({
        url: url,
      })
    }
  },
  gotoPoint() {
    let url = '/pages/point/index';
    if (url) {
      wx.navigateTo({
        url: url,
      })
    }
  },
  gotoPromotion() {
    let url = '/pages/activity/promotion/index';
    if (url) {
      wx.navigateTo({
        url: url,
      })
    }
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
  onShareAppMessage: function (options) {
    return {
      title: '欢迎加入Costa会员',
      imageUrl: 'https://miniprogrampicture.costa.net.cn/icon_103.jpg',
      path: '/pages/index/index'
    }
  },
  initPage(){
    // auth.checkAuth({
    //     callback: ({auth}={})=>{
    //         if(auth){
    //             console.log('dddd')
    //         } else {
    //             console.log('1111')
    //         }
    //     }
    // });
  }
})
