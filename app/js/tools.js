const tools={};
tools.checkLength=(str,minlength,maxlength)=>{
	if(str.length>maxlength) return false;
	if(str.length<minlength) return false;
	return true;
}
tools.checkCn=(str)=>{
	var reg=new RegExp("[\\u4E00-\\u9FFF]+","g");
	if(reg.test(str)){
		return false;
	}
	else{
		return true;
	}
}

module.exports=tools;