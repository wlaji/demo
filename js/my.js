//页面加载时可以加载多个函数addLoadEvent(函数名)
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
	window.onload=func;
}else{
	window.onload=function(){
	oldonload();
	func();
}
}
}
addEventListener("type",函数名,false)
attachEvent("onload",函数名);

//将一个newElement插入到targetElement的后面
function insertAfter(newElement,targetElement){
		var parent=targetElement.parentNode;
		if(parent.lastChid==targetElement){
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement,targetElement.nextSibling);
			}
	
	}
