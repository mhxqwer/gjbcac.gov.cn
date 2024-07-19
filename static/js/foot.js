//京公网安备
var beian = document.getElementById("beian");
beian.href = "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040102700108";
beian.target = "_blank";
//pdf
try{
	var pdfSrc = $("#pdfAdd").html();
	if(/android/i.test(navigator.userAgent)){
		var ifraddstr = document.getElementById("ifrAdd").src;
		if(ifraddstr.indexOf("#zoom=54")>0){ 
			var newifaddstr = ifraddstr.substring(0,ifraddstr.indexOf("#zoom=54"))+"#zoom=20";
			$("#ifrAdd").attr("src",newifaddstr);
		}else{
			$("#ifrAdd").attr("src",pdfSrc);
		}
	}else{
		$("#ifrAdd").attr("src",pdfSrc);
	}		
}catch(e){
	
}
