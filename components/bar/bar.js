
const URL = require('../../modules/api-list.js');
const ajax = require('../../modules/ajax.js');
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
          let url = `${URL.default.pay.url}`;
          ajax.request(
            url,
            {},
            function(data){
              if(data.code === 200) {
                wx.addCard({
                  cardList: [
                    {  
                      // cardId: data.data.cardapiConfig.cardId,
                      // cardExt: JSON.stringify(data.data.cardExt)
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
           )

              
         }
    }
})
