var crToken = "";
for(var i=0;i<6;i++) //6位随机数，用以加在时间戳后面。
{
	crToken += Math.floor(Math.random()*10);
}
crToken = new Date().getTime() + crToken;  

function getcrTokenInfo(){
	$.ajax({
		type:"POST",
		url:"/cms/pub/interact/token.jsp?outTradeNo="+crToken,
		dataType:"text",
		success:function(data){
		}
	});
}
getcrTokenInfo();