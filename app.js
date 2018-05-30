var login = require('./modules/login.js')

App({
  global: {
    wxUserInfo: {},
    currentLanguage: 'zh',
    zh: {
      home: {
        home: '主页',
        myPay: '微信支付',
        edit: '编辑资料',
        cardlevel1: '红卡会员',
        cardlevel2: '银卡会员',
        cardlevel3: '金卡会员',
        myPoint: '我的积分',
        myCard: '我的卡券',
        activity: '最新活动',
        member: '会员权益',
        store: '门店查询',
        points: '积分',
        contactUs: '联系客服',
        serviceTel: '服务热线：',
        serviceTime: '服务时间：',
        serviceTimeDetail: '周一至周日',
        close: '关闭',
        pickUp: '收起',
        codeDesc: '使用时，出示此码'
      },
      card:{
        title: '我的礼券',
        myCard: '我的礼券',
        more: '展开',
        pickUp: '收起',
        expiredCoupons: '已失效',
        validityTime: '有效期',
      },
      member: {
        title: '会员等级介绍',
        content_1: '1. 消费1元 = 1积分（零售商品等除外）；',
        content_2: '2. 20积分抵1元，积分需要整单兑换（当笔积分有效期为次年的同月月底）;',
        content_3: '3. 会员使用权益时需出示会员卡或电子会员卡',
        content_4: '4. 会员权益暂不可累积使用或者与门店其他活动叠加使用',
        content_5: '5. 会员积分以及权益使用范围仅限咖世家咖啡所属门店（万达影城店、火车站店、机场店以及杭州阿里巴巴店、SSP店、COMPASS店除外）',
        content_5_1: '·如享受门店其他活动折扣，例如银行卡折扣，则不可以使用会员优惠券或者会员积分兑换权益',
        content_5_2: '·门店会员活动、会员优惠券以及会员积分兑换不可同时享用',
        content_5_3: '·累计杯数按正价产品累计，非正价产品不计入杯数',
        content_6: '6. 升级后的12个月内，若累计积分未达到您所在等级的积分，您将自动降级至当前积分相应等级，您将享受降级后相应等级的权益；',
        gold_1_1_1: '一年内累计',
        gold_1_1_2: '1500积分',
        gold_1_1_3: '即刻成为',
        gold_1_1_4: '金卡会员',
        gold_1_2_1: '正价消费任意手工调制饮品独享',
        gold_1_2_2: '满8杯赠1杯',
        gold_2_1_1: '升级次日获得',
        gold_2_1_2: '饮品免费',
        gold_2_1_3: '礼券一张',
        gold_2_2_1: '生日月获得',
        gold_2_2_2: '饮品免费',
        gold_2_2_3: '礼券一张',
        gold_3_1_1: '丰富的',
        gold_3_1_2: '会员专享活动',
        gold_3_2_1: '专属的',
        gold_3_2_2: '提前预购礼遇',
        silver_1_1_1: '一年内累计',
        silver_1_1_2: '700积分',
        silver_1_1_3: '即刻成为',
        silver_1_1_4: '金卡会员',
        silver_1_2_1: '正价消费任意手工调制饮品独享',
        silver_1_2_2: '满12杯赠1杯',
        silver_2_1_1: '升级次日获得',
        silver_2_1_2: '买一赠一',
        silver_2_1_3: '礼券一张',
        silver_2_2_1: '生日月获得',
        silver_2_2_2: '买一赠一',
        silver_2_2_3: '礼券一张',
        silver_3_1_1: '丰富的',
        silver_3_1_2: '会员专享活动',
        red_1_1_1: '完成注册,即刻成为',
        red_1_1_2: '红卡会员,',
        red_1_1_3: '开始累计积分',
        red_1_2_1: '生日月获得',
        red_1_2_2: '买一赠一',
        red_1_2_3: '礼券一张',
        red_2_1_1: '首次消费满30，',
        red_2_1_2: '赠30元礼券',
        red_2_2_1: '丰富的',
        red_2_2_2: '会员专享活动'
      },
      store: {
        title: '门店查询',
        nearby: '附近',
        search: '搜索COSTA门店'
      },
      points: {
        flag: '积分',
        title: '积分中心',
        vipName: '红卡会员',
        current: '当前积分',
        upgrade: '距离升级积分',
        expire: '本月底将过期',
        tab1: '积分兑换',
        tab2: '最新活动',
        placeholder: '输入您的转赠积分',
        btnTxt: '分享给好友',
        subTitle: '积分记录',
      },
      redeem: {
        title: '积分兑换',
        tips: '更多积分兑换礼品',
        txt: '敬请期待'
      },
      share: {
        title: '送给大家',
        titleNone: '慢一步啦',
        txt: '感觉自己壕壕哒',
        txtNone: '积分已被拿走',
        btnTxt: '分享给大家',
        btnTxtBack: '返回我的积分',
        btnTxtApt: '确认领取积分',
        tips: '你已成功抢到此积分',
        tipsNone: '手慢啦，积分已被其他小伙伴领走啦',
      },
      userInfo: {
        title: '个人信息修改',
        requireType: '必填项',
        selectType: '选填项',
        selectsType: '选填项,可多选',
        sex: ['男', '女'],
        company: '所在公司',
        position: '职位',
        subTitle: '产品偏好',
        tips: '告诉我们你的产品偏好，可获得20积分',
        items: ['美式', '拿铁', '卡布奇诺', '摩卡', '醇艺白', '意式浓缩', '可塔朵', '茶饮', '巧克力'],
        btnTxt: '确认修改',
      },
      login: {
        title: '欢迎加入',
        tel: '输入手机号码',
        code: '输入短信验证码',
        sms: '发送验证码',
        tips: '秒后重发',
        btnTxt: '提交',
        btnAgreement1: '我已阅读并同意',
        btnAgreement2: '服务条款',
        agreementTitle: '会员服务条款',
        agreementBtnTxt: "同意并继续注册"
      },
      agreement: {
        list: [
          {
            title: '欢迎您注册为COSTA会员。COSTA尊重您的隐私，并仅为下述之目的保存及使用您的姓名、电话、生日信息以及您向COSTA提供的其他个人信息。为保障您的权益，请您于注册和使用COSTA电子会员卡之前，详细阅读本协议。',
            note: '通过点击“注册我的COSTA帐户”按钮，您将确认：您已经阅读、理解并同意接受本条款和条件的法律约束。如果您不同意本条款和条件，请关闭此窗口并且不要注册您的“我的COSTA”电子会员。'
          },
          {
            title: '一、加入会员',
            note: '当您点选条款条件和个人隐私政策时，即表示您将注册成为“我的COSTA”会员并同意使用“我的COSTA”所提供的任何服务（包括COSTA不时更新的服务），亦视为您已阅读本协议，并同意遵守本协议的所有内容。您如果不同意本协议，请终止注册并停止使用“我的COSTA”。COSTA有权随时更新、更改“我的COSTA”服务条件，并根据情况自行决定暂停或终止“我的COSTA”服务，COSTA对您和第三方均不承担任何责任。',
          }, {
            title: '二、会员的个人资料 ',
            note: '会员同意：',
            sub: [
              '提供及时、详尽及准确的个人资料。',
              '同意接收来自COSTA以及COSTA相关合作伙伴提供的有关COSTA会员服务的信息。',
              '如个人资料有任何变动，须及时更新注册资料。所有原始键入的资料将引用为注册资料。',
            ]
          },
          {
            title: '三、个人信息保护 ',
            note: '本站将遵守相关的法律规定，合法、合理地处理会员所传输的资料或信息，在未获得会员同意之前，本站不得对外披露会员的姓名、电话、生日信息及其他依法受保护的个人资料，但以下情况除外：',
            sub: [
              '基于法律规定或法定程序之要求；',
              '在紧急情况下为维护其他会员或第三方之人身安全；',
              '为COSTA向会员提供服务之目的，寄发活动资料或联络会员；',
              '提供会员资讯或服务、会员统计或进行关于网络行为之调查或研究。'
            ]
          },
          {
            title: '四、会员注册义务  ',
            note: '会员同意遵守所有与本站服务相关之法律法规及以下规定，并同意不干扰他人使用会员服务：',
            sub: [
              '自行提供上网设备，包括电脑及上网装置；',
              '自行支付上网所需的费用以及使用本站服务所需会员自行承担的费用；',
              '依本站会员注册表之提示提供本人正确、最新及完整的资料；',
              '对任何错误、不实、过期或不完整的资料，或本站合理怀疑有误之资料，本站有权暂停或终止会员帐号，并拒绝向会员提供部分或全部服务；',
              '会员在注册时应当选择稳定性及安全性相对较好的电子邮箱或手机并且同意接收“我的COSTA”发往用户的各类电子邮件或短信。如因用户电子邮箱或手机的原因致使用户未及时接收电子邮件或短信或无法正常阅读电子邮件或短信的，只要“我的COSTA”电子会员系统成功发送了电子邮件或短信的，应当视为用户已经接收到相关的电子邮件或短信。电子邮件或短信在COSTA发送服务器上所记录的发出时间视为送达时间。'
            ]
          },
          {
            title: '五、会员账号、密码及安全性   ',
            note: '一旦注册成功成为COSTA会员，会员将得到“我的COSTA”电子会员卡。会员同意遵守以下事项：',
            sub: [
              '电子会员卡遭到未获授权的使用，或任何其他安全问题发生时，会员应立即通知COSTA。',
              '每次连线完毕，请确保结束账号使用，如未能遵守本项规定而发生任何损失，COSTA概不负责。',
              '如果会员因未妥善保管自己的账号而对会员、COSTA或第三方造成损害，会员将承担损害赔偿责任。'
            ]
          },
          {
            title: '六、退出会员与会员资格的取消 ',
            note: '如发现任何会员有以下行为之一，COSTA保留取消其使用服务的权利，并无需做出任何赔偿或补偿',
            sub: [
              '可能造成“我的COSTA”电子会员系统部分或全部的服务受影响，或危害 “我的COSTA”会员系统的正常运行；',
              '以任何欺诈行为获得会员资格，包括但不限于提供虚假的注册信息资料等；',
              '在“我的COSTA”电子会员卡内从事非法行为，发布涉及敏感政治、宗教、色情或其它违反有关国家法律法规的文字、图片等信息；',
              '以任何非法目的而使用“我的COSTA”会员网络服务系统。'
            ]
          },
          {
            title: '七、会员义务  ',
            note: '会员同意并遵守以下条款：',
            sub: [
              '严禁使用本站所有相关服务从事非法行为；',
              '不得传输任何侵犯他人权利的信息及资料；',
              '不得传输任何违反现行法律、法规的信息及资料；',
              '不得进行任何危害计算机信息网络安全的行为；',
              '不得以任何方式干扰COSTA的会员服务；',
              '遵守本站规定的所有注册程序。'
            ]
          },
          {
            title: '八、有限责任 ',
            note: 'COSTA有义务在技术上确保“我的COTSA”电子会员卡的正常运行，尽力避免服务中断或将服务中断时间限制在最短时间内，保证用户网上交易活动的顺利进行。如因不可抗力或其他本网站无法控制的原因致使服务中断或无法正常使用或丢失有关的信息、记录等，COSTA不承担任何法律责任；任何用户向COSTA提供错误、不完整、不实信息等造成不能正常使用网上服务或遭受任何其他损失，概与COSTA无关。'
          }
        ],
        title: '会员服务条款',
        btnTxt: '同意并继续注册'
      }
    },
    en: {
      home: {
        home: 'Home',
        myPay: 'My Wallet',
        edit: 'Profile Updates',
        cardlevel1: 'Red Member',
        cardlevel2: '银卡会员',
        cardlevel3: '金卡会员',
        myPoint: 'My Points',
        myCard: 'My Coupons',
        activity: 'Promotions',
        member: 'Member Rewards',
        store: 'Store Location',
        points: 'points',
        contactUs: 'Contact us',
        serviceTel: 'Service HotLine：',
        serviceTime: 'Service Time：',
        serviceTimeDetail: 'Mon-Sun ',
        close: 'Closed',
        pickUp: 'pack up',
        codeDesc: 'Please present QR code'
      },
      card:{
        title: 'My Coupons',
        myCard: 'My coupons * ',
        more: 'more',
        pickUp: 'pack up',
        expiredCoupons: 'Expired coupons * ',
        validityTime: 'Expiry date ',
      },
      store: {
        title: 'Store Location',
        nearby: 'Nearby',
        search: 'Search'
      },
      member: {
        title: 'Member Level Introduction',
        content_1: '1. You will earn 1 point for each￥1.00 you spend at designated Costa stores using your registered membership card (retail products etc. excluded).',
        content_2: '2. Every 20 points is worth ￥1.00. Points can only be redeemed if members have enough points to cover the full value of the order (The points earned will be valid to the end of the same month of your purchase of the following year).',
        content_3: '3. Members need to show the unique membership QR Code when using member benefits.',
        content_4: '4. Member benefits cannot be used multiple times in one order or be combined with other discounts and promotions at the same time.',
        content_5: '5. Member points and member benefits can only be used in designated stores under Costa Coffee (the stores in Wanda cinemas, train stations, airports, Alibaba Hangzhou, SSP, and COMPASS are excluded).',
        content_5_1: '·In-store discounts or promotions cannot be combined with member benefits (for example credit card discounts cannot be combined with member benefits).',
        content_5_2: '·Coupon and rewards redemption cannot be used at the same time.',
        content_5_3: '·Only beverages at full price as collecting points are eligible towards the number of beverages purchased.',
        content_6: '6. Twelve months after your membership level is upgraded, if the points you earned are below the threshold of your current membership level, you will be automatically transferred to the level that corresponds to your current points.',
        gold_1_1_1: 'Earn ',
        gold_1_1_2: '1,500 points ',
        gold_1_1_3: 'to become our ',
        gold_1_1_4: 'Gold Member',
        gold_1_2_1: 'Buy 8 beverages at full price to ',
        gold_1_2_2: 'get 1 for free',
        gold_2_1_1: 'Receive ',
        gold_2_1_2: 'a free beverage ',
        gold_2_1_3: 'coupon one day after your membership level has increased.',
        gold_2_2_1: 'Receive ',
        gold_2_2_2: 'a free beverage ',
        gold_2_2_3: 'coupon during your Birthday month.',
        gold_3_1_1: 'Exclusive ',
        gold_3_1_2: 'Member Rewards ',
        gold_3_2_1: 'Get to know new products and rewards ',
        gold_3_2_2: ' first',
        silver_1_1_1: 'Earn ',
        silver_1_1_2: '700 points ',
        silver_1_1_3: 'to become our ',
        silver_1_1_4: 'silver Member',
        silver_1_2_1: 'Buy 12 beverages at full price to ',
        silver_1_2_2: 'get 1 for free',
        silver_2_1_1: 'Receive ',
        silver_2_1_2: 'a free beverage ',
        silver_2_1_3: 'coupon one day after your membership level has increased.',
        silver_2_2_1: 'Receive ',
        silver_2_2_2: 'a free beverage ',
        silver_2_2_3: 'coupon during your Birthday month.',
        silver_3_1_1: 'Exclusive ',
        silver_3_1_2: 'Member Rewards ',
        red_1_1_1: 'Complete registration to become our ',
        red_1_1_2: 'Red Member,',
        red_1_1_3: 'and start to earn your points',
        red_1_2_1: 'Receive ',
        red_1_2_2: 'a free beverage ',
        red_1_2_3: 'coupon during your Birthday month.',
        red_2_1_1: 'First purchase over ¥30, will ',
        red_2_1_2: 'get one complimentary ¥30 coupon',
        red_2_2_1: 'Exclusive ',
        red_2_2_2: 'Member Rewards'
      },
      redeem: {
        title: 'Redeem Points',
        tips: 'More Options for Rewards Redmeption',
        txt: 'Coming soon'
      },
      points: {
        flag: 'Points',
        title: 'Point Center',
        vipName: 'Red Member',
        current: 'Current Point',
        upgrade: 'Points required to upgrade',
        expire: 'Expiring at then end of this month',
        tab1: 'Redeem Points',
        tab2: 'Promotions',
        placeholder: 'Enter the points given',
        btnTxt: 'Share with',
        subTitle: 'Points History',
      },
      share: {
        title: '送给大家',
        txt: '感觉自己壕壕哒',
        btnTxt: 'Share with friends',
        btnTxtBack: 'back',
        btnTxtApt: 'Confirm',
      },
      userInfo: {
        title: 'Profile Updates',
        requireType: 'Required',
        selectType: 'Optional',
        selectsType: 'can select more then one',
        sex: ['male', 'femal'],
        company: 'My Company',
        position: 'My Position',
        subTitle: 'My Favorite',
        tips: 'Tell us you favorite veverage and get extra 20 points',
        items:
        ['Americano', 'Latte', 'Cappuccino', 'Mocha', 'Flat White', 'Espresso', 'Cortadp', 'Tea', 'Cholcolate'],
        btnTxt: 'Save Updates',
      },
      login: {
        title: '欢迎加入1',
        tel: '输入手机号码1',
        code: '输入短信验证码1',
        sms: '发送验证码1',
        tips: 's后重发1',
        btnTxt: '提交1',
        btnAgreement1: '我已阅读并同意1',
        btnAgreement2: '服务条款1',
        agreementTitle: '会员服务条款1',
        agreementBtnTxt: "同意并继续注册1"
      },
      agreement: {
        list: [
          {
            title: '欢迎您注册为COSTA会员。COSTA尊重您的隐私，并仅为下述之目的保存及使用您的姓名、电话、生日信息以及您向COSTA提供的其他个人信息。为保障您的权益，请您于注册和使用COSTA电子会员卡之前，详细阅读本协议。',
            note: '通过点击“注册我的COSTA帐户”按钮，您将确认：您已经阅读、理解并同意接受本条款和条件的法律约束。如果您不同意本条款和条件，请关闭此窗口并且不要注册您的“我的COSTA”电子会员。'
          },
          {
            title: '一、加入会员',
            note: '当您点选条款条件和个人隐私政策时，即表示您将注册成为“我的COSTA”会员并同意使用“我的COSTA”所提供的任何服务（包括COSTA不时更新的服务），亦视为您已阅读本协议，并同意遵守本协议的所有内容。您如果不同意本协议，请终止注册并停止使用“我的COSTA”。COSTA有权随时更新、更改“我的COSTA”服务条件，并根据情况自行决定暂停或终止“我的COSTA”服务，COSTA对您和第三方均不承担任何责任。',
          }, {
            title: '二、会员的个人资料 ',
            note: '会员同意：',
            sub: [
              '提供及时、详尽及准确的个人资料。',
              '同意接收来自COSTA以及COSTA相关合作伙伴提供的有关COSTA会员服务的信息。',
              '如个人资料有任何变动，须及时更新注册资料。所有原始键入的资料将引用为注册资料。',
            ]
          },
          {
            title: '三、个人信息保护 ',
            note: '本站将遵守相关的法律规定，合法、合理地处理会员所传输的资料或信息，在未获得会员同意之前，本站不得对外披露会员的姓名、电话、生日信息及其他依法受保护的个人资料，但以下情况除外：',
            sub: [
              '基于法律规定或法定程序之要求；',
              '在紧急情况下为维护其他会员或第三方之人身安全；',
              '为COSTA向会员提供服务之目的，寄发活动资料或联络会员；',
              '提供会员资讯或服务、会员统计或进行关于网络行为之调查或研究。'
            ]
          },
          {
            title: '四、会员注册义务  ',
            note: '会员同意遵守所有与本站服务相关之法律法规及以下规定，并同意不干扰他人使用会员服务：',
            sub: [
              '自行提供上网设备，包括电脑及上网装置；',
              '自行支付上网所需的费用以及使用本站服务所需会员自行承担的费用；',
              '依本站会员注册表之提示提供本人正确、最新及完整的资料；',
              '对任何错误、不实、过期或不完整的资料，或本站合理怀疑有误之资料，本站有权暂停或终止会员帐号，并拒绝向会员提供部分或全部服务；',
              '会员在注册时应当选择稳定性及安全性相对较好的电子邮箱或手机并且同意接收“我的COSTA”发往用户的各类电子邮件或短信。如因用户电子邮箱或手机的原因致使用户未及时接收电子邮件或短信或无法正常阅读电子邮件或短信的，只要“我的COSTA”电子会员系统成功发送了电子邮件或短信的，应当视为用户已经接收到相关的电子邮件或短信。电子邮件或短信在COSTA发送服务器上所记录的发出时间视为送达时间。'
            ]
          },
          {
            title: '五、会员账号、密码及安全性   ',
            note: '一旦注册成功成为COSTA会员，会员将得到“我的COSTA”电子会员卡。会员同意遵守以下事项：',
            sub: [
              '电子会员卡遭到未获授权的使用，或任何其他安全问题发生时，会员应立即通知COSTA。',
              '每次连线完毕，请确保结束账号使用，如未能遵守本项规定而发生任何损失，COSTA概不负责。',
              '如果会员因未妥善保管自己的账号而对会员、COSTA或第三方造成损害，会员将承担损害赔偿责任。'
            ]
          },
          {
            title: '六、退出会员与会员资格的取消 ',
            note: '如发现任何会员有以下行为之一，COSTA保留取消其使用服务的权利，并无需做出任何赔偿或补偿',
            sub: [
              '可能造成“我的COSTA”电子会员系统部分或全部的服务受影响，或危害 “我的COSTA”会员系统的正常运行；',
              '以任何欺诈行为获得会员资格，包括但不限于提供虚假的注册信息资料等；',
              '在“我的COSTA”电子会员卡内从事非法行为，发布涉及敏感政治、宗教、色情或其它违反有关国家法律法规的文字、图片等信息；',
              '以任何非法目的而使用“我的COSTA”会员网络服务系统。'
            ]
          },
          {
            title: '七、会员义务  ',
            note: '会员同意并遵守以下条款：',
            sub: [
              '严禁使用本站所有相关服务从事非法行为；',
              '不得传输任何侵犯他人权利的信息及资料；',
              '不得传输任何违反现行法律、法规的信息及资料；',
              '不得进行任何危害计算机信息网络安全的行为；',
              '不得以任何方式干扰COSTA的会员服务；',
              '遵守本站规定的所有注册程序。'
            ]
          },
          {
            title: '八、有限责任 ',
            note: 'COSTA有义务在技术上确保“我的COTSA”电子会员卡的正常运行，尽力避免服务中断或将服务中断时间限制在最短时间内，保证用户网上交易活动的顺利进行。如因不可抗力或其他本网站无法控制的原因致使服务中断或无法正常使用或丢失有关的信息、记录等，COSTA不承担任何法律责任；任何用户向COSTA提供错误、不完整、不实信息等造成不能正常使用网上服务或遭受任何其他损失，概与COSTA无关。'
          }
        ],
        title: '会员服务条款',
        btnTxt: 'agreen and register'
      }
    }
  },
  onLaunch: function () {
    login.checkLogin()
  }

})