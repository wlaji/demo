// JavaScript Document
addLoadEvent(prepareSlideshow);
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;	
	}else{
		window.onload=function(){
			oldonload();
			func();	
		}	
	}	
}

function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	
	if(elem.movement){
		clearTimeout(elem.movement);	
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";	
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x&&ypos==final_y){
		return true;	
	}
	if(xpos<final_x){
		var dist=Math.ceil((final_x-xpos)/10)
		xpos+=dist;
	}
	if(xpos>final_x){
		var dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y){
		var dist=Math.ceil((final_y-ypos)/10)
		ypos+=dist;
	}
	if(ypos>final_y){
		var dist=Math.ceil((ypos-final_y)/10)
		ypos-=dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}
function addClass(element,value){
	if(!element.className){
		element.className=value;	
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}	
}
function prepareSlideshow(){
	var preview=document.getElementById("preview");
	var list=document.getElementById("linklist");

	var links=list.getElementsByTagName("a");
	links[0].onmouseover=function(){
		moveElement("preview",-66,0,10);	
	}
	links[1].onmouseover=function(){
		moveElement("preview",-132,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-198,0,10);	
	}
}


function insertAfter(newElement,targeElemet){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);	
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);	
	}	
}