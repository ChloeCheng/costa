// pages/userInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: app.global[app.global['currentLanguage']].userInfo,
    userName:"",
    date:"2017-01-02",
    sex:"男",
    city:'北京-北京',
    company:'',
    position:'',
    region: ['北京', '北京'],
    items: [],
  },
  submit:function(){
    if(this.data.userName === ""){
      console.log('信息错误')
    }
  },
  toggleCheck:function(e){
    var id = e.currentTarget.dataset.id
    var newItems = this.data.items.map(item=>{
      if(item.id == id){
        item.checked = !item.checked
      }
      return item
    })
    this.setData({
      items: newItems
    })
  },
  bindSexChange:function(e){
    this.setData({
        sex: this.data.currentData.sex[e.detail.value],
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        region: e.detail.value
    })
  },
  bindPositionInput: function (e) {
    this.setData({
        position: e.detail.value,
    })
  },
  bindCompanyInput: function (e) {
    this.setData({
        company: e.detail.value,
    })
  },
  bindUserNameInput: function (e) {
    this.setData({
        userName: e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var items = []
    app.global[app.global['currentLanguage']].userInfo.items.map((item,index) => {
      items.push({
        id:index,
        name: item,
        checked: false,
      })
    })
    this.setData({
      items: items
    })
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