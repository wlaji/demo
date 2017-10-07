// JavaScript Document
addLoadEvent(prepare);
addLoadEvent(myImg);
function showpic(whichpic){
		var source=whichpic.getAttribute("href");
		var myphoto=document.getElementById("myphoto");
		myphoto.setAttribute("src",source);
		var text=whichpic.getAttribute("title");
		var description=document.getElementById("description");
		description.firstChild.nodeValue=text;
	}
function prepare(){
		var a=document.getElementById("list");
		var b=a.getElementsByTagName("a");
		for(var i=0;i<b.length;i++){
				b[i].onclick=function(){
						showpic(this);
						return false;
					}
				//b[i].onkeypress=b[i].onclick;
			}
	}
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
function myImg(){
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var text=document.createTextNode("choose an picture");
	description.appendChild(text);
	var myphoto=document.createElement("img");
	myphoto.setAttribute("src","..//image/longzhu.jpg");
	myphoto.setAttribute("width","400px");
	myphoto.setAttribute("height","300px");
	myphoto.setAttribute("alt","a picture");
	myphoto.setAttribute("id","myphoto");
	var gallery=document.getElementById("list");
	insertAfter(myphoto,gallery);
	gallery.parentNode.insertBefore(description,myphoto);
	
	
	
	
	
}
function insertAfter(newElement,targetElement){
		var parent=targetElement.parentNode;
		if(parent.lastChid==targetElement){
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement,targetElement.nextSibling);
			}
	
	}

