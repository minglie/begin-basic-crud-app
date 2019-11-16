let arc = require('@architect/functions')


exports.handler = async function post (req) {
   req.params = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
 
  console.log(req.params.text)
  
   return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      "data":"ok"
    })
  }
}
