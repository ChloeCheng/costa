// pages/points/index.js
const app = getApp()
const ajax = require('./modules.js')
var moveFlage = true
var startPosition = 0
var movePosition = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']].points,
    images: {
      logo: '../../assets/point/vip-logo.png',
      bg: '../../assets/point/bg.png',
      current: '../../assets/point/current.png',
      upgrade: '../../assets/point/upgrade.png',
      expire: '../../assets/point/expire.png',
      dui: '../../assets/point/dui.png',
      'new': '../../assets/point/new.png',
      'share': '../../assets/point/share.png',
      'up': '../../assets/point/up.png',
      'down': '../../assets/point/down.png',
    },
    points: {
      current: 0,
      expire: 0,
      next_level: 0,
      next_level_progress: 0,
      total: 0,
    },
    list: [],
    animateScroll: '',
  },
  goRecord: function (e) {
    wx.navigateTo({
      url: '/pages/record/index'
    })
  },
  gotoShare: function (e) {
    wx.navigateTo({
      url: '/pages/share/index'
    })
  },
  gotoPromotion() {
    let url = '/pages/activity/promotion/index';
    if (url) {
      wx.navigateTo({
        url: url,
      })
    }
  },
  goRedeem: function (e) {
    wx.navigateTo({
      url: '/pages/activity/redeem/index'
    })
  },
  changeLanguage() {
    app.global.currentLanguage = (app.global.currentLanguage === 'zh' ? 'en' : 'zh');
  },
  methods: {

  },
  touchstart(e) {
    console.log('start:' + e.touches[0].clientY)
    startPosition = e.touches[0].clientY
  },
  touchmove(e) {
    if (moveFlage) {
      var currentY = e.touches[0].clientY
      //下滑
      if (currentY - startPosition > 10) {
        console.log(e.touches[0].clientY)
        moveFlage = false
        this.setData({
          animateScroll: 'animateScrollBottom',
        })
        setTimeout(function () {
          moveFlage = true
        }, 1000)
      }
      // 上滑
      else if (startPosition - currentY > 10) {
        console.log(e.touches[0].clientY)
        moveFlage = false
        this.setData({
          animateScroll: 'animateScrollTop',
        })
        setTimeout(function () {
          moveFlage = true
        }, 1000)
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ currentData: app.global[app.global['currentLanguage']].points })
    ajax.getPoint((data) => {
      this.setData({  points: data  })
    })
    ajax.getRecord((data) => {
      this.setData({  list: data })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.currentData)
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