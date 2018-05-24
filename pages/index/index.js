const app = getApp()

Page({
  data: {
    bannerList: [{
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/u\/1804\/2018042316385234.jpg",
      "url": "\/pages\/activity\/summer\/index"
    }, {
      "image": "https:\/\/miniprogrampicture.costa.net.cn\/banner_1.png",
      "url": ""
    }]
  },
  onLoad: function () {
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
})
