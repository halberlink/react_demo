export default (function(){if(document.documentElement.clientWidth<=640){
document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
}
window.onresize=function(){
	console.log('改变了width');
	if(document.documentElement.clientWidth<=640){
document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';	
}
 }
})()
