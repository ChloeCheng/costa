
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        active: {
            type: Boolean,
            value: false
        },
        currentDate: {
            type: Object,
            value: {home:{home:'主页','myPay':'微信支付'}}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    ready(){

    },

    /**
     * 组件的方法列表
     */
    methods: {
        skipHome: function(){
           let url = '/pages/index/index';
           if(url){
             wx.navigateTo({
                url: url,
              })
           }    
        },
        skipPay: function(){
            let url = '/pages/pay/index';
            if(url){
              wx.navigateTo({
                 url: url
               })
            } 
         }
    }
})
