
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
            /*let url = '/pages/pay/index';
            if(url){
              wx.navigateTo({
                 url: url
               })
            }*/
            wx.addCard({
                cardList: [
                  {
                    // cardId: 'piOxp1mVprjRHcshqAKU5d2jZl4U', //'pJYr5jsXWx5ckp82dPu6pVRqPfws', //'piOxp1mVprjRHcshqAKU5d2jZl4U',
                    // cardExt:	`{"api_ticket":"HoagFKDcsGMVCIY2vOjf9ofcj2a8F5lHBS_Es91nJNj3_oDjKXET2NVfLn4UQHbMROObtZi9UXn8_-ZSFRLHcQ","code": ${code},"openid": ${id},"nonce_str":"5b0b968ad2049","signature":"d9e0a3c12811e8066631b3a21e08741d016689f7","timestamp":${time}}`
                    
                      cardId: 'piOxp1mVprjRHcshqAKU5d2jZl4U',
                      cardExt: '{"code": "", "openid": "", "timestamp": "1527514580", "nonce_str":"123","signature":"d0747f9af3794a5945dd136a64c678de5a99de78"}'
                    
                  }
                ],
                success: function(res) { 
                  console.log(res)
                },
                fail: function (res){
                  console.log(res)
                }
              })  
         }
    }
})
