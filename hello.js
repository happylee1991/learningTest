Ext.onReady(function(){

	/*Ext.get("btn").on("click",function(){
	
		var name=Ext.get("name").dom.value;
		Ext.Msg.alert("消息框","你好 "+name+" 你点击到了我好高兴！！");
		
	});
	*/
	var e=Ext.get("a1").applyStyles({	
	position:"absolute",
	top:500,
	left:500,
	backgroundColor:"red",
	width:100,
	height:100
		
	});
	//e.slideIn();
	//e.slideOut();
	//e.slideIn('l',{ easing: 'easeOut', duration:800 }); 
	//e.slideIn("r",{easing:'easeOut',duration:2});
//	e.slideIn('t', {
//    easing: 'easeOut',
//    duration: 500
//});
	e.highlight("ffff9c", {
    attr: "backgroundColor", 
    endColor:"ffffff",
    easing: 'easeIn',
    duration: 2000
});
});

