//ҳ�����ʱ���Լ��ض������addLoadEvent(������)
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
addEventListener("type",������,false)
attachEvent("onload",������);

//��һ��newElement���뵽targetElement�ĺ���
function insertAfter(newElement,targetElement){
		var parent=targetElement.parentNode;
		if(parent.lastChid==targetElement){
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement,targetElement.nextSibling);
			}
	
	}
