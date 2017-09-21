//测试环境
let api = "http://paytest.jxzf.me/jxpaywebsys-1.0.1/"

//获取cookie数据
let getCookie = function() {
	let strCookie=document.cookie;
	let arrCookie=strCookie.split("; ");
	let id = 0;
	let name = 0;
	for(let i=0;i<arrCookie.length;i++){
	    let arr=arrCookie[i].split("=");
	    if("id"==arr[0]){
	        id=arr[1];
	     }
	    if("name"==arr[0]) {
	        name=arr[1];
	    }
	}	
	return {
		id: id,
		name: name
	}
}

export default {
	api,
	getCookie
}