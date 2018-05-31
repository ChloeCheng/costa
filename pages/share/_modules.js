const ajax = require('../../modules/ajax.js')

exports.getPoint = function (hash, callback) {
  ajax.request(
    '/wechat-mp/point/get/' + hash,
    {},
    function (json) {
      if (json.code == 200) {
        callback && callback(json.data.value)
      }
    }
  )
}