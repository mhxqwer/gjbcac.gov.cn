function openUrl(urlstr,target,winstyle)
{
var absoluteurl = 'http://'+serverip+':'+serverport+urlstr;
window.open(absoluteurl,target,winstyle);

}
function submitForm(formname,actionurl,target)
{
var absoluteurl = 'http://'+serverip+':'+serverport+actionurl;
window.open(absoluteurl,target,winstyle);
document.all(formname).submit();
} 
function addopenwin(actionurl,target,parameter) {
   if(parameter!='')parameter='?'+parameter;
     var width  = Math.floor( screen.width  * .7 );
     var height = Math.floor( screen.height * .7 ) + 33;
     var leftm  = Math.floor( screen.width  * .1)+30;
     var topm   = Math.floor( screen.height * .05)+30;
     var argu = "toolbar=0,location=0,maximize=1,directories=0,status=0,menubar=0,scrollbars=1, resizable=1,left=" + leftm+ ",top=" + topm + ", width="+width+", height="+height;

   window.open(actionurl + parameter, target,argu)
}


var size=12;
var fontheight=19;
	window.onload=function () {
		if (document.getElementById('zoom')!=null) {
		var obj=document.getElementById('zoom');
		obj.style.lineHeight="19px";
		}
	 		
	}
	
 function ContentSize(tmp){
	/* var obj=document.getElementById('zoom');
	 if (tmp==0) { 
	 	size=size+2;
		obj.style.lineHeight="150%";
		}
	 else if(tmp==2) {
		 size=size-2;
		 obj.style.lineHeight="150%";
		 }
	 else {
		 size=12;
		 obj.style.lineHeight="19px";
		 }
	obj.style.fontSize=size+'px';*/
	if (document.getElementById('zoom')!=null) {
		var obj=document.getElementById('zoom');
		if (obj.getElementsByTagName("td")!=null) {var objtd=document.getElementById('zoom').getElementsByTagName("td");}
		if (obj.getElementsByTagName("span")!=null) {var objspan=document.getElementById('zoom').getElementsByTagName("span");}
		}
 
	 
	 if (tmp==0) { 
	 	if (size>13) {}
		else {size=size+2;}	 	
		}
	 else if(tmp==2) {
		if (size<11) {}
		else {size=size-2;}	 
		 }
	 else {
		 size=12;
		 }

	for (i=0;i<objtd.length;i++) {
		objtd[i].style.fontSize=size+'px';
	}
	obj.style.fontSize=size+'px';
	
	if (size>12) {
		obj.style.lineHeight="150%";
		for (i=0;i<objtd.length;i++) {
			objtd[i].style.lineHeight="150%";
		}
		for (i=0;i<objspan.length;i++) {
			objspan[i].style.lineHeight="150%";
		}

	}
	else {
		obj.style.lineHeight="19px";
		for (i=0;i<objtd.length;i++) {
			objtd[i].style.lineHeight="19px";
		}
		for (i=0;i<objspan.length;i++) {
			objspan[i].style.lineHeight="19px";
		}

	}

 

 }
