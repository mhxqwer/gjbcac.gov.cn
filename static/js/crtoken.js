var crToken = "";
for(var i=0;i<6;i++) //6λ����������Լ���ʱ������档
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