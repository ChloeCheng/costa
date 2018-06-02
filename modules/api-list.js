let URL = {
    login: {
      login: 'http://costa.slashsoft.cn/wechat-mp/oauth/',
    },
    pay: {
       url: 'http://costa.slashsoft.cn/wechat-mp/wechat/get-card-api-'  //获取卡券签名接口
    },
    home: {
        userInfo: 'http://costa.slashsoft.cn/wechat-mp/customer/get-userinfo',   //获取用户信息
        status: 'https://api.union.vip.com/vsp/user/join/b2clogin',   //获取提醒设置状态
    },
    store: {
        storeList: 'http://costa.slashsoft.cn/wechat-mp/store/by-geo/',  // 获取门店信息
        searchStore: 'http://costa.slashsoft.cn/wechat-mp/store/by-search/'  //搜索门店信息
    },
    card: {
        list: 'http://costa.slashsoft.cn/wechat-mp/coupon/get-all',  //获取卡券列表  
        detail: 'http://costa.slashsoft.cn/wechat-mp/coupon/get-by-id/'  //获取优惠券详情 
    }
}

export default URL;