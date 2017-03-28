var express = require('express');
var router = express.Router();
var connection=require('../app/db/index.js');
var mysql=require('mysql');

router.post('/loginUser',function(req,res){
	console.log("收到登录请求");
	let body="";
	req.on('data',function(data){
		body+=data;
	})
	req.on('end',function(){
		let arr=body.split('&');
		let data={};
		arr.forEach((item,index)=>{
			let arr=item.split("=");
			data[arr[0]]=arr[1];
		});
		var params=[data.username,data.password];
		var sql="select * from user where username='"+data.username+"'";
		// connection.query(sql,function(error,result){
		// 	if(error){
		// 		console.log(error.message);
		// 	}
		// 	console.log('进入查询');
		// 	console.log(result[0]);
		// 	if(result[0]==undefined){
		// 		res.send({loginSuccess:false,message:'用户名不存在'});
		// 		return;
		// 	}
		// 	if(result){
		// 		if(result[0].username==data.username&&result[0].password==data.password){
		// 			res.send({loginSuccess:true});
		// 		}else{
		// 			res.send({loginSuccess:false,message:'用户名或者密码不正确'});
		// 		}
		// 	}
		// })
		connection(sql,function(err,result,fields){
			if(err){
				console.log(err.message);
			}
			console.log('进入查询');
			if(result[0]==undefined){
				res.send({loginSuccess:false,message:'用户名不存在'});
				return;
			}
			if(result){
				if(result[0].username==data.username&&result[0].password==data.password){
					console.log('返回登录信息');
					res.send({loginSuccess:true,username:data.username});
				}else{
					res.send({loginSuccess:false,message:'用户名或者密码不正确'});
				}
			}
		});
	})
})
router.post('/sign',function(req,res){
	console.log("收到异步请求");
	let body='';
	req.on('data',function(data){
		body+=data;
	})
	req.on('end',function(){
		let arr=body.split('&');
		let data={};
		arr.forEach((item,index)=>{
			let arr=item.split("=");
			data[arr[0]]=arr[1];
		});
		var params=[data.username,data.password];
		// connection.query('insert into user(username,password) values(?,?)',params,function(error,result){
		// 	if(error){
		// 		console.log(error.message);
		// 	}else{
		// 		res.send('创建成功');
		// 	}
		// });
		let sql="insert into user(username,password) values('"+params[0]+"','"+params[1]+"')";
		connection(sql,function(error,result){
			if(error){
				console.log(error.message);
			}else{
				res.send('创建成功');
			}
		});
	});
});


module.exports=router;
