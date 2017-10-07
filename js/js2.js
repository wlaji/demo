// JavaScript Document
addLoadEvent(displayCite);
addLoadEvent(displayAccesskeys);
addLoadEvent(changeColor);
addLoadEvent(highLightRows);

function displayCite(){
		var quotes=document.getElementsByTagName("blockquote");
		for(var i=0;i<quotes.length;i++){

			if(!quotes[i].getAttribute("cite")) continue;
			var url=quotes[i].getAttribute("cite");
			var quoteChildren=quotes[i].getElementsByTagName("*");
			if(quoteChildren.length<1) continue;
			var elem=quoteChildren[quoteChildren.length-1];
			var links=document.createElement("a");
			var links_text=document.createTextNode("source");
			links.appendChild(links_text);
			links.setAttribute("href",url);
			var supperscript=document.createElement("sup");
			supperscript.appendChild(links);
			elem.appendChild(supperscript);
					
		}
	}
function displayAccesskeys(){
	var links=document.getElementsByTagName("a");
	var akeys=new Array();
	for(var i=0;i<links.length;i++){
		var current_link=links[i];
		if(!current_link.getAttribute("accesskey")) continue;
		//取得accesskey的值
		var key=current_link.getAttribute("accesskey");
		
		var text=current_link.lastChild.nodeValue;
		akeys[key]=text;
		}
		var list=document.createElement("ul");
		for(key in akeys){
			var text=akeys[key];
			var str=key+":"+text;
			var item=document.createElement("li");
			var item_text=document.createTextNode(str);
			item.appendChild(item_text);
			list.appendChild(item);
		}
		var header=document.createElement("h3");
		var header_text=document.createTextNode("Accesskeys");
		header.appendChild(header_text);
		document.body.appendChild(header);
		document.body.appendChild(list);
		
		
	
}

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
styleElementSiblings("h1","intro");
function styleElementSiblings(tag,theclass){
	var elems=document.getElementsByTagName(tag);
	for(var i=0;i<elems.length;i++){
		var elem=getNextElement(elems[i].nextSibling);
		addClass(elem,theclass);
	}
		
			
}  



function getNextElement(node){
	if(node.nodeType==1){
		return node;	
	}	
	if(node.nextSibling){
		return getNextElement(node.nextSibling);	
	}
	return null;
}
function changeColor(){
	var	tabs=document.getElementsByTagName("table");
	for(var i=0;i<tabs.length;i++){
		var odd=false;
		var rows=tabs[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				addClass(rows[j],"odd");
				odd=false;	
			}else{
			 	odd=true;	
			}	
		}	
	}
}
function highLightRows(){
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].onmouseover=function(){
			this.style.background="grey";	
		}
		rows[i].onmouseout=function(){
			this.style.background="white";	
		}	
	}	
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



	

