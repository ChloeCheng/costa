const ajax = require('../../modules/ajax.js')
const Dialog = require('../../components/vendor/dist/dialog/dialog');

exports.getDetail = function (callback) {
  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    {},
    function (json) {
      json = {
        code: 200,
        data: {
          birthday: '2018-3-43',
          city: '130100',
          province: '130',
          company: 'gosg',
          favourites: ['美式', '拿铁'],
          gender: 1,
          job: '3234',
          name: '3223',
        }
      }
      if (json.code == 200) {
        callback && callback(json.data)

      }
    }
  )
}


exports.getAddress = function (callback) {
  // var address = wx.getStorageSync('address')
  // if (address) {
  //   callback(address)
  //   return
  // }
  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    {},
    function (json) {
      json = {
        code: 200,
        data: {
          provinces: [{
            code: 110,
            name: '北京',
          }, {
            code: 120,
            name: '天津',
          }, {
            code: 130,
            name: '河北',
          }, {
            code: 140,
            name: '湖南',
          }, {
            code: 150,
            name: '山西',
          }
          ],
          cities: {
              110: [
                {
                  code: 110100,
                  name: '北京'
                }
              ],
              120: [
                {
                  code: 120100,
                  name: '天津'
                }
              ],
              130: [
                {
                  code: 130100,
                  name: '石家庄'
                },
                {
                  code: 130101,
                  name: '唐山'
                },
                {
                  code: 130102,
                  name: '秦皇岛'
                }
              ],
              140: [
                {
                  code: 140100,
                  name: '石家庄4'
                },
                {
                  code: 140101,
                  name: '唐山4'
                },
                {
                  code: 140102,
                  name: '秦皇岛4'
                }
              ],
              150: [
                {
                  code: 150100,
                  name: '石家庄5'
                },
                {
                  code: 150101,
                  name: '唐山5'
                },
                {
                  code: 150102,
                  name: '秦皇岛5'
                }
              ]
            }
        }
      }
      if (json.code == 200) {
        callback && callback(json.data)
        wx.setStorage({
          key: "address",
          data: json.data
        })
      }
    }
  )
}

exports.update = function (option) {
  ajax.request(
    'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    option,
    function (json) {
      json = {
        code: 200
      }
      if (json.code == 200) {
        wx.showModal({
          content: '更新个人信息成功',
          showCancel:false,
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack()
            }
          }
        })
      }
    }
  )
}