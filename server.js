var express=require('express');
var app=express();
var users=require('./routes/users');
var path=require('path');
var compression=require('compression');

app.use(compression());
app.use('/user',users);
app.get('/',function(req,res){
	console.log('start server');
	res.sendFile(__dirname+'/index.html');
	console.log('start success');
});
app.use(express.static(path.join(__dirname+'/')));
app.listen(process.env.PORT||5050);