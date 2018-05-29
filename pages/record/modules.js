const ajax = require('../../modules/ajax.js')
exports.getRecord = function (callback) {
  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    {},
    function (json) {
      json = {
        code: 200,
        data: [{
          date: '2018-09-01',
          desc: '奖励积分',
          icon: 'add',
          point: '20'
        }, {
          date: '2018-10-10',
          desc: '奖励积分212',
          icon: 'subtract',
          point: '-10'
        }]
      }
      if (json.code == 200) {
        callback && callback(json.data)
      }
    }
  )
}