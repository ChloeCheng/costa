// pages/points/index.js
const app = getApp()
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorizeLocation: true,
    city:'',
    currentData: app.global[app.global['currentLanguage']].store,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      currentData: app.global[app.global['currentLanguage']].store 
    })
      
  },
  initPage(){
    let _this = this;
    wx.getSetting({
      success(res) {
          if (res.authSetting['scope.userLocation']) {
            // 已经授权，可以直接调用 
            wx.getLocation({
              type: 'wgs84',
              success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                _this.getCity(latitude,longitude);
                _this.setData({
                  'authorizeLocation': true
                });
              }
            })
          } else {
            wx.getLocation({
              type: 'wgs84',
              success: function(res) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                _this.getCity(latitude,longitude);
                _this.setData({
                  'authorizeLocation': true
                });
              },
              fail: function(res){
                _this.setData({
                  'authorizeLocation': false
                });
              }
            })
          }
      },
      fail: function(err){
          console.log('checkAuth fail!!!!')
      }
    })
  },
  openLocation() {
    wx.openLocation({
      latitude: 31.23037,
      longitude: 31.23037,
      scale: 28
    })          
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.initPage();
  },
  getCity(latitude,longitude) {
    let _this = this;
    let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=WO7BZ-N5AWK-HV6JT-AAOKY-GY6VK-O2BWZ`
    wx.request({
      url: url, 
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        let city = res.data.result.address_component.city
        _this.setData({
          'city': city
        });
      }
    })
  },
  getSettingInfo(){
    let _this = this;
    let detail = e.detail;

    if (detail.errMsg == 'getLocation:ok') {
      this.setData({
        'authorizeLocation': true
      }); 
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          _this.getCity(latitude,longitude);
          _this.setData({
            'authorizeLocation': true
          });
        },
        fail: function(res){
          _this.setData({
            'authorizeLocation': false
          });
        }
      })    
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initPage();
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
  
  }
})