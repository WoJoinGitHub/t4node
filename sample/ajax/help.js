const sync = require('xd-synchttp')
function get() {
  let res = sync.http_get('http://192.168.5.231/swagger/docs/v1', 0)
  let content = JSON.parse(res).paths
  let arry = []
  for (const item in content) {
    // api url
    let obj = { path: item }
    let arryUrl = item.split('/')
    obj.name = arryUrl[arryUrl.length - 1]
    for (const key in content[item]) {
      // 请求方法
      obj.method = key
      obj.data = key === 'get' ? '{ params:data }' : 'data'
      // 描述
      let scondObj = content[item][key]
      // obj.describe = scondObj.summary ? scondObj.summary : ''
      obj.describe ='说明'
      obj.tags = scondObj.tags[0]
    }
    arry.push(obj)
  }
  return arry
}
module.exports = {
  name: 'result.js',
  arry: get(),
}
