let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let todo = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  todo.created = todo.created || Date.now()

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
