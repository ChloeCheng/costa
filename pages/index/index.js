const app = getApp();
const login = require('../../modules/login.js');
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');
const QRCode = require('../../common/qrcode.js');

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
    userInfo: {},
    currentLanguage: app.global.currentLanguage || 'zh',
    showCode: false,
    showPhone: false,
    currentData: app.global[app.global['currentLanguage']].home,
    currentBarDate: app.global[app.global['currentLanguage']],
    showData:{},
    hideDialog: false
  },
  onLoad: function () {
    let _this = this;
    wx.getUserInfo({
      success: function(res) {
          getApp().global.wxUserInfo = res.userInfo;
          _this.setData({
            'userInfo': res.userInfo,
            hideDialog: true
          });
      }
    })
    _this.initPage();
    _this.getBanner();
  },
  initPage(noInit){
    let _this = this;
    let url = `${URL.default.home.userInfo}`;
    ajax.request(
      url,
      {},
      function(data){
        if(data.code === 200) {
          let tmp = data.data, pointValue = tmp.max - tmp.total;
          //let pointHint = tmp.hint.replace(/<[^>]+>/g, '').replace('POINTS', pointValue)
          tmp.pointValue = pointValue || 0;
          if(!noInit){
            var qrcode = new QRCode('canvas', {
              text: '12' + tmp.vipcode,
              width: 130,
              height: 130,
              colorDark: "#9e0028",
              colorLight: "#ffffff",
              correctLevel: QRCode.CorrectLevel.H,
            });
          }
          _this.setData({
            'showData': tmp,
            showCode: false
          });
        }
      }
     )
  },
  getBanner(){
    let _this = this;
    let url = `${URL.default.home.bannerList}`;
    ajax.request(
      url,
      {},
      function(data){
        if(data.code === 200) {
          let tmp = data.data;
          tmp.forEach(item=>{
            item.img = `${app.global.host}${item.img}`;
          });
          _this.setData({
            'bannerList': tmp
          });
        }
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
    this.initPage(true);
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
    login.checkLogin()
    this.initPage(true);
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
      imageUrl: app.global.hostUrl + '/default/img/img-coupon-share.jpg',
      path: '/pages/index/index'
    }
  }
})
