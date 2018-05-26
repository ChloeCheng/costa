
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        active: {
            type: Boolean,
            value: false
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
           console.log(url)
           if(url){
             wx.navigateTo({
                url: url,
                success: function(res){
                  console.log(res)
                },
                fail: function(res){
                    console.log(res)
                }
              })
           }    
        },
        skipPay: function(){
            let url = '/pages/index/index';
            if(url){
              wx.navigateTo({
                 url: url
               })
            } 
         }
    }
})
