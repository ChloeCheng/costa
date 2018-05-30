
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       
    },

    /**
     * 组件的初始数据
     */
    data: {
        authorizeUserInfo: true
    },

    ready(){
        let _this = this;
        wx.getSetting({
        success(res) {
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                success: function(res) {
                    // console.dir(res.userInfo)
                    getApp().global.wxUserInfo = res.userInfo;
                    _this.triggerEvent('info')
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

    /**
     * 组件的方法列表
     */
    methods: {
        getuserinfo: function(e){
            let _this = this;
            let detail = e.detail;
        
            if (detail.errMsg == 'getUserInfo:ok') {
              this.setData({
                'authorizeUserInfo': true
              }); 
              wx.getUserInfo({
                success: function(res) {
                  getApp().global.wxUserInfo = res.userInfo;
                  _this.triggerEvent('info')
                }
              })    
            }
          }
    }
})