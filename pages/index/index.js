const app = getApp()
const auth = require('../../modules/auth.js');

Page({
  data: {
    bannerList: [{
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/u\/1804\/2018042316385234.jpg",
      "url": "\/pages\/activity\/summer\/index"
    }, {
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/banner_1.png",
      "url": ""
    }],
    authorizeUserInfo: true,
    userInfo: null,
    currentLanguage: app.global.currentLanguage || 'zh',
    showCode: false,
    showPhone: false
  },

  onLoad: function () {
    let _this = this;
    wx.getSetting({
      success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
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
      fail: function(err){
          console.log('checkAuth fail!!!!')
      }
    })
  },
  getuserinfo: function(e){
    let _this = this;
    let detail = e.detail;

    if (detail.errMsg == 'getUserInfo:ok') {
      this.setData({
        'authorizeUserInfo': true
      }); 
      wx.getUserInfo({
        success: function(res) {
          console.dir(res.userInfo)
          _this.setData({
            'userInfo': res.userInfo
          });
        }
      })    
    }
  },
  changeLanguage(){
    app.global.currentLanguage = (this.data.currentLanguage === 'zh' ? 'en' : 'zh');
    this.setData({
      'currentLanguage': app.global.currentLanguage
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
  gotoStore(){
    let url = '/pages/store/index';
    if(url){
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
      //this.initPage();
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
    auth.checkAuth({
        callback: ({auth}={})=>{
            if(auth){
                console.log('dddd')
            } else {
                console.log('1111')
            }
        }
    });
  }
})
