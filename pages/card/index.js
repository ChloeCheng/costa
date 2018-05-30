// pages/points/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLanguage: app.global['currentLanguage'],
    currentData: app.global[app.global['currentLanguage']].card,
    activeSpread: false,
    disableSpread: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      currentLanguage: app.global['currentLanguage'],
      currentData: app.global[app.global['currentLanguage']].card 
    })
   
  },
  activeSpreadTap(){
    let value = this.data.activeSpread;
    this.setData({
      'activeSpread': !value
    });
  },
  disableSpreadTap(){
    let value = this.data.disableSpread;
    this.setData({
      'disableSpread': !value
    });
  },
  gotoDetail(){
    wx.navigateTo({
      url: '/pages/shareCard/index'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    // console.log(this.data.currentData)
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
    // console.log('2222')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})