// JavaScript Document
addLoadEvent(addNode);
addLoadEvent(addText);

function addNode(){
		var a=document.getElementById("test");
		var b=document.createElement("p");
		var c=document.createTextNode("hello world");
		b.appendChild(c);
		a.appendChild(b);
		
}

function addText(){
		var a=document.getElementById("addnode");
		var b=document.createElement("p");
		var text1=document.createTextNode("This is");
		var c=document.createElement("em");
		var text2=document.createTextNode(" my ");
		var text3=document.createTextNode("content.");
		b.appendChild(text1);
		c.appendChild(text2);
		b.appendChild(c);
		b.appendChild(text3);
		a.appendChild(b);
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
	window.onload=func;
}
else{
	  window.onload=function()
	  {
		oldonload();
		func();
	  }
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