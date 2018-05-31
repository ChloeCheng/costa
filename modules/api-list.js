let URL = {
    login: {
      login: 'http://costa.slashsoft.cn/wechat-mp/oauth/',
    },
    home: {
        userInfo: 'http://costa.slashsoft.cn/wechat-mp/customer/get-userinfo',   //获取用户信息
        status: 'https://api.union.vip.com/vsp/user/join/b2clogin',   //获取提醒设置状态
    },
    store: {
        storeList: 'http://costa.slashsoft.cn/wechat-mp/store/by-geo',  // 获取门店信息
        searchStore: 'http://costa.slashsoft.cn/wechat-mp/store/by-search'  //搜索门店信息
    }
}

export default URL;