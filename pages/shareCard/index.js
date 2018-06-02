// pages/share/index.js
const app = getApp()
const login = require('../../modules/login.js');
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']],
    shareType:1,//1,分享， 2，领积分， 3，领成， 4，领完了
    detail: {},
  },
  goback(){
    wx.navigateTo({
      url: '/pages/card/index'
    })
  },
  updateInfo: function () {
    login.checkLogin()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.hideShareMenu();
     this.initData(options.id);
  },
  initData(id){
      let _this = this;
      let url = `${URL.default.card.detail}${id}`;
      ajax.request(
        url,
        {},
        function(data){
          if(data.code === 200) {
            console.log(data.data)
            _this.setData({
              'detail': data.data
            });
          }
        }
      )
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
    if(options.from !== 'button'){
      
    }
  }
})