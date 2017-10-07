// JavaScript Document
addLoadEvent(addtext);
addLoadEvent(addtext2);

function addtext(){
		var abbr=document.getElementsByTagName("abbr");
		var defs=new Array();
		for(var i=0;i<abbr.length;i++){
				var definition=abbr[i].getAttribute("title");
				var key=abbr[i].lastChild.nodeValue;
				defs[key]=definition;
			}
		var dlist=document.createElement("dl");
		for(key in defs){
				var definition=defs[key];
				var dtitle=document.createElement("dt");
				var dtitle_text=document.createTextNode(key);
				dtitle.appendChild(dtitle_text);
				var ddsec=document.createElement("dd");
				var ddsec_text=document.createTextNode(definition);
				ddsec.appendChild(ddsec_text);
				dlist.appendChild(dtitle);
				dlist.appendChild(ddsec);	
				
			}
		var header=document.createElement("h2");
		var header_text=document.createTextNode("Abbreviation");
		header.appendChild(header_text);
		document.getElementsByTagName("body")[0].appendChild(header);
		document.body.appendChild(dlist);
	
	}
function addtext2(){
		var addtext=document.getElementById("text");
		addtext.innerHTML="<p>wojiaoxiaoyuren</p>";
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