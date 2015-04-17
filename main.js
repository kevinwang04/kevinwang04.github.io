/*window.onload=function(){

}*/
$(document).ready(function(){
	$(".nav_icon").click(function(){
		if ($(".nav_icon").hasClass("show")) {
			//隐藏侧边栏
			$(this).removeClass("show");
			$(".nav_icon").animate({left:"0px"});
			$(".page_wrap" ).animate({left:'0px'});
			$(".side_bar").animate({left:"-250px"});
			$(this).children("span:first").css({"width":"25px","transform":"rotate(0)","position":"relative","top":"0px"});
			$(this).children("span:last").css({"width":"25px","transform":"rotate(0)","position":"relative","top":"0px"});
			$(this).children("span:odd").css("display","block");
		}else{
			//显示侧边栏
			$(this).addClass("show");
			$(".nav_icon").animate({left:"250px"});
			$(".page_wrap" ).animate({left:'250px'});
			$(".side_bar").animate({left:"0px"});
			$(this).children("span:first").css({"width":"35px", "transform":"rotate(45deg)","position":"relative","top":"5px"});
			$(this).children("span:last").css({"width":"35px","transform":"rotate(-45deg)","position":"relative","top":"-4px"});
			$(this).children("span:odd").css("display","none");
		};
	});

	$(".icon-home,.icon-list-alt,.icon-user").mouseover(function(){
		$(this).animate({borderRadius:"5%"});
	}).mouseout(function(){
		$(this).animate({borderRadius:"100%"})
	});
});	