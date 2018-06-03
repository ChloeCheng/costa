// pages/share/index.js
const app = getApp()
const login = require('../../modules/login.js');
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');
const formatTime = require('../../common/formatTime.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']].cardShare,
    shareType: 1, //1,分享， 2，领积分， 3，领成， 4，领完了, 5自己的
    detail: {},
    shareCode: '',
    noShareExplain: false
  },
  gobackPath(){
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
     if(options.id){
      this.initData(options.id);
      this.setData({
        'noShareExplain': true
      });
      return;
     }
     if(options.hash){
      this.initShareDetail(options.hash);
      this.setData({
        'shareCode': options.hash
      });
      return;
     }
     
  },
  initShareDetail(hash){
    let _this = this;
    let url = `${URL.default.card.shareDatail}${hash}`;
    ajax.request(
      url,
      {},
      function(data){
        if(data.code === 200) {
          console.log(data.data)
          let tmp = data.data;
          tmp.time = formatTime.formatTime(new Date(tmp.expired_time))
          if(tmp.myself){
            _this.setData({
              'shareType': 5
            });
          } else if(tmp.status){
            _this.setData({
              'shareType': 2
            });
          } else {
            _this.setData({
              'shareType': 4
            });
          }
          _this.setData({
            'detail': data.data
          });
        }
      }
    );
  },
  initData(id){
      let _this = this;
      let url = `${URL.default.card.detail}${id}`;
      let shareCodeUrl = `${URL.default.card.share}${id}`;
      ajax.request(
        url,
        {},
        function(data){
          if(data.code === 200) {
            console.log(data.data)
            let tmp = data.data;
            tmp.time = formatTime.formatTime(new Date(tmp.expired_time))
            _this.setData({
              'detail': data.data
            });
          }
        }
      );
      ajax.request(
        shareCodeUrl,
        {},
        function(data){
          if(data.code === 200) {
            _this.setData({
              'shareCode': data.data.hash
            });
          }
        }
      )
    },
    getCard(){
      let _this = this;
      let hash = this.data.shareCode;
      let url = `${URL.default.card.getShare}${hash}`;
      ajax.request(
        url,
        {},
        function(data){
          if(data.code === 200) {
            wx.showModal({
              title: '提示',
              content: '领取成功',
              showCancel: false,
              success:()=>{
                _this.setData({
                  'shareType': 3
                })
              }
            })
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
    let _this = this;
    return {
      title: '欢迎加入Costa会员',
      imageUrl: '',
      path: '/pages/shareCard/index?hash=' + this.data.shareCode,
      success: function (res) {
       
        // 转发成功之后的回调
        wx.showModal({
          title: '提示',
          content: '分享成功',
          showCancel: false,
          success:()=>{
            wx.navigateTo({
              url: '/pages/card/index',
            })
          }
        })
      }
    }
  }
})