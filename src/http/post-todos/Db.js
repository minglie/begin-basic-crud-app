var SQLite3 = require('sqlite3').verbose();
var Db = new SQLite3.Database("./student.db");


Db.doSql=function doSql(sql){
    var promise = new Promise(function(reslove,reject){
        if(sql.indexOf("select")>-1){
            Db.all(sql,
                function(err, result) {
                    if (err) {
                    
                        reject(err);
                    } else {
                        reslove(result);
                    }
                });
        }else{
            Db.run(sql,
                function(err) {
                    if(err){
                        reject(err);
                    }
                    reslove(null);
                });
        }
    })
    return promise;
}


module.exports=Db;
