// 数据库连接对象
var mysql=require('mysql');
var settings=require('./setting');
var {host,port,user,password,database,useConnectionPooling}=settings;


// function handleError (err) {
//   if (err) {
//     // 如果是连接断开，自动重新连接
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       connect();
//     } else {
//       console.error(err.stack || err);
//     }
//   }
// }
// function connect () {
//  db = mysql.createConnection({host,port,user,password,database,useConnectionPooling});

// //   db=mysql.createConnection({
// // 	host:"w.rdc.sae.sina.com.cn",
// //     port:3307,
// //     user:"mn5zy4o424",
// //     password :"z4m12j1yw5zzzmi444hl3h30j44hyklz4hjx00h3",
// //     database :"app_singledemo",
// // });
//   db.connect(handleError);
//   db.on('error', handleError);
// }


// var db;
// connect();

var pool=mysql.createPool({
	host,user,password,database
	// host:"w.rdc.sae.sina.com.cn",
 //    port:3307,
 //    user:"mn5zy4o424",
 //    password :"z4m12j1yw5zzzmi444hl3h30j44hyklz4hjx00h3",
 //    database :"app_singledemo",
});


var query=function(sql,callback){
	pool.getConnection(function(err,conn){
		if(err){
			callback(err,null,null);
		}else{
			conn.query(sql,function(qerr,vals,fields){
				conn.release();
				callback(qerr,vals,fields);
			});
		}
	});
};

module.exports=query;