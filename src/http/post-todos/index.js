let arc = require('@architect/functions')
let Db=require("./Db.js")

exports.handler = async function post (req) {
  req.params = arc.http.helpers.bodyParser(req)
  var rows= await Db.doSql(req.params.sql);
  var result={"code":3002,"message":"操作成功","success":true,"data":rows}  
   return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      "Access-Control-Allow-Origin":"*", "Access-Control-Allow-Headers": "X-Requested-With", 
      "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS", "X-Powered-By":' 3.2.1'
    },
    body: JSON.stringify(result)
  }
}
