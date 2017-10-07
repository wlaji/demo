// JavaScript Document
addLoadEvent(highlightPage);
function addLoadEvent(func){                               //参数func为页面加载完成要执行的函数
    var oldonload = window.onload;                         //把现有的window.onload事件处理函数的值存入变量oldonload中
    if(typeof window.onload != 'function'){                //判断  如果onload处理函数没绑定任何函数，则添加新函数；否则，追加新函数
        window.onload = func;
    }else{
        window.onload = function(){                        //这里使用了匿名函数包纳两个函数
            oldonload();
            func();
        }
    }
}

/*******************跟JavaScript中的insertBefore方法对应的一个函数*******************/
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

/******************动态添加class属性的函数*****************************/
function addClass(element,value){                                    //调用该函数，就是创建一个例如：class="here"，给标签增加了增加了这么一个属性
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName +=" ";
        newClassName += value;
        element.className = newClassName;
    }
}
function highlightPage(){
    //判断
    if(!document.getElementById) return false;
    if(!document.getElementsByName) return false;
    if(!document.getElementById("navigation")) return false;
    
    //获取
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    
    //逻辑操作
    for(var i =0; i<links.length; i++){
        var linkurl = links[i].getAttribute("href");            //获取具有href的属性值
        var currenturl = document.location.href;                //获取当前的href属性值
        if(currenturl.indexOf(linkurl) != -1){
            links[i].className = "here";
			var linkstext=links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linkstext);
        }
    }
}
addLoadEvent(highlightPage); 
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
function prepareSlideshow(){
	if(!document.getElementById("intro")) return false;
	var intro=document.getElementById("intro");
	var slideshow=document.createElement("div");
	var frame=document.createElement("img");
	frame.setAttribute("src","../image/frame.gif");
	frame.setAttribute("id","frame");
	slideshow.appendChild(frame);
	
	slideshow.setAttribute("id","slideshow");
	var preview=document.createElement("img");
	preview.style.position="absolute";
	preview.setAttribute("src","../image/show.png");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	var links=intro.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onmouseover=function(){
			var destination=this.getAttribute("href");
		
			if(destination.indexOf("about.html")!=-1){
				moveElement("preview",-150,0,0);
					
			}	
			if(destination.indexOf("photos.html")!=-1){
				moveElement("preview",-300,0,5);
					
			}	
			if(destination.indexOf("live.html")!=-1){
				moveElement("preview",-450,0,5);
					
			}
			if(destination.indexOf("contact.html")!=-1){
				moveElement("preview",-600,0,5);
					
			}		
		}	
	}
	
	
}
addLoadEvent(prepareSlideshow);
function showSection(id){
	var divs=document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		if(divs[i].className.indexOf("section")==-1) continue;	
		if(divs[i].getAttribute("id")!=id){
			divs[i].style.display="none";
		}else{
			divs[i].style.display="block";	
		}
	}
		
}
function prepareInternalnav(){
	if(!document.getElementById("internalnav")) return false;
	var nav=document.getElementById("internalnav");
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var sectionId=links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId)) continue;
		
		document.getElementById(sectionId).style.display="none";
		links[i].destination=sectionId;
		links[i].onclick=function(){
			showSection(this.destination);
			
			return false;	
		}
		
		
	}	
}
addLoadEvent(prepareInternalnav);
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text=whichpic.getAttribute("title");	
	}else{
		var text="";	
	}
	var description=document.getElementById("description");
	if(description.firstChild.nodeType==3){
		description.firstChild.nodeValue=text;	
	}
	return false;
	
}
function preparePlaceholder(){
	if(!document.getElementById("imagegallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../image/timg25.jpg");
	placeholder.setAttribute("width","200px");
	placeholder.setAttribute("height","150px;");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	description.style.fontWeight="bold";
	var desctext=document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
		
}
function prepareGallery(){
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);	
		}	
	}
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
function stripeTables(){
	
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	for(var i=0;i<tables.length;i++){
		var odd=false;
		var rows=tables[i].getElementsByTagName("tr");
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
function highlightRows(){
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].oldClassName=rows[i].className;
		rows[i].onmouseover=function(){
			addClass(this,"highlight");
				
		}
		rows[i].onmouseout=function(){
			this.className=this.oldClassName;	
		}	
	}	
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
function isFilled(field){

	if(field.value.length<1||field.value==field.defaultValue){
		
		return false;	
	}else{
		return true;	
	}
}
function isEmail(field){
	if(field.value.indexOf("@")==-1||field.value.indexOf(".")==-1){
		return false;	
	}else{
		return true;	
	}
}
function validateForm(whichform){
	
	for(var i=0;i<whichform.elements.length;i++){
		var element=whichform.elements[i];
		if(element.className.indexOf("required")!=-1){
			if(!isFilled(element)){
				alert("please fill in the "+element.name+" field");
				return false;	
			}	
		}
		if(element.className.indexOf("email")!=-1){
			if(!isEmail(element)){
				alert("the "+element.name+" field must be a valid email address");
				return false;	
			}	
		}	
	}
	return true;
}
function prepareForms(){
	
	for(var i=0;i<document.forms.length;i++){
		var thisform=document.forms[i];
		resetFields(thisform);
		thisform.onsubmit=function(){
			return validateForm(this);
			
		}	
	}	
}
addLoadEvent(prepareForms);
function resetFields(whichForm){
	for(var i=0;i<whichForm.elements.length;i++){
		var element=whichForm.elements[i];
		if(element.type=="submit") continue;
		if(!element.defaultValue) continue;
		element.onfocus=function(){
			if(this.value==this.defaultValue){
				this.value="";	
			}	
		}
		element.onblur=function(){
			if(this.value==""){
				this.value=this.defaultValue;	
			}	
		}
	}	
}


















