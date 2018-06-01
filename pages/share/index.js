// pages/share/index.js
const app = getApp()
const ajax = require('./_modules.js')
const login = require('../../modules/login.js');
const getUrl = require('../../modules/getPageUrl.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']],
    shareType: 1,//1,分享， 2，领积分， 3，领成， 4，领完了
  },
  goback() {
    if (this.data.shareType == 1) {
      return
    }else if(this.data.shareType == 2){
      var option = getUrl.getCurrentPageArgs()
      ajax.receivePoint(option.pointHash,()=>{
          this.setData({
            shareType:3,
          })
      })
      return 
    }
    wx.navigateTo({
      url: '/pages/point/index'
    })
  },
  updateInfo: function () {
    login.checkLogin(() => {
      var option = getUrl.getCurrentPageArgs()
      ajax.getPoint(option.pointHash, (data) => {
        if (data.myself) {
          this.setData({
            shareType: 1
          })
        }else if (data.status == false) {
          this.setData({
            shareType: 4
          })
        } else if (data.status == true) {
          this.setData({
            shareType: 2
          })
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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