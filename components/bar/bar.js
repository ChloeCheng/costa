
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
          let pages = getCurrentPages();    //获取加载的页面
          let currentPage = pages[pages.length-1];    //获取当前页面的对象
          let url = currentPage.route;    //当前页面url
          let target = '/pages/index/index', prev = '';
          console.log(url)
          if(target.indexOf(url) > 0) {
            return;
          }
          if (pages.length > 1) {
            prev = pages[pages.length-2].route;
            if(target.indexOf(prev) > 0){
              wx.navigateBack();
              return;
            }
          }
          if(target){
            wx.navigateTo({
              url: target,
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
                    
                    cardId: 'pDRa7jn8bf-LsjT1XXnd_e_JZbfc',
                    cardExt: '{"code": "", "openid": "", "timestamp": "1527759976", "nonce_str":"8328b961-0412-4637-ad82-c9521fe6f9c1","signature":"a0946e27269672afd51346206fdd8a1098013716"}'
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
