/*window.onload=function(){

}*/
$(document).ready(function(){
	var side_h = $(".side_bar").height();
	$(".side_bar").css("top",(-side_h - 40)+"px");
	$(".nav_icon").click(function(){
		
		$(this).animate({borderRadius:"100%"});
		if ($(".nav_icon").hasClass("show")) {
			//隐藏侧边栏
			$(this).removeClass("show");
			$(".side_bar").animate({top:(-side_h-40)+"px"});
			/*$(".page_wrap" ).animate({left:'0px'});
			$(".side_bar").animate({left:"-250px"});*/
			$(this).children("span:first").css({"width":"25px","transform":"rotate(0)","position":"relative","top":"0px"});
			$(this).children("span:last").css({"width":"25px","transform":"rotate(0)","position":"relative","top":"0px"});
			$(this).children("span:odd").css("display","block");
		}else{
			//显示侧边栏
			$('.side_bar').css({"transform":"translateY(0)",
							"transition-timing-function":"ease-in","-webkit-transition-timing-function":"ease-in"	
							})
			$(this).addClass("show");
			$(".side_bar").animate({top:"0"});
			/*$(".page_wrap" ).animate({left:'250px'});
			$(".side_bar").animate({left:"0px"});*/
			$(this).children("span:first").css({"width":"35px", "transform":"rotate(45deg)","position":"relative","top":"5px"});
			$(this).children("span:last").css({"width":"35px","transform":"rotate(-45deg)","position":"relative","top":"-4px"});
			$(this).children("span:odd").css("display","none");
		};
	});

	//侧边栏图标圆角设置
	$(".icon-home,.icon-list-alt,.icon-user").mouseover(function(){
		$(this).animate({borderRadius:"5%"});
	}).mouseout(function(){
		$(this).animate({borderRadius:"100%"});
	});

	//个人兴趣悬停效果
	$(".interesting_wrap li").mouseover(function(){
		$(this).children("span").animate({top:"0px",backgroundColor:"rgba(116, 211, 168, 0.80)"});
	});
	$(".interesting_wrap li").mouseleave(function(){
		$(this).children("span").animate({backgroundColor:"rgba(116, 211, 168, 0.0)",top:"400px"});
	});

//实现页面切换效果：
	var n = $(".ul_wrap li").size();
	$(".ul_wrap").width(n*100+"%");
	$('.ul_wrap li').width(100/n+"%");
	$(".icon-list-alt").click(function(){
		$(".ul_wrap").animate({left:'-100%'},300);
	});
	$('.icon-user').click(function(){
		$(".ul_wrap").animate({left:"-200%"},300);
	});
	$(".icon-home").click(function(){
		$(".ul_wrap").animate({left:"0"},300);
	});
	$(".strong").css({"cursor":"pointer","position":"relative"});
	$(".strong").mouseover(function(){
		$(this).css({"animation":"myfirst 2s ease-in 0 infinite","-webkit-animation":"myfirst 2s ease-in 0 infinite"})
	});
});	

//实现个人兴趣介绍栏：
/*var $centerwell_first = $('#centerwell li:first');
	$centerwell_first.animate({width: '49%'}, 300);
	$centerwell_first.find('h3').animate({backgroundPosition: '-16%'}, 300);
	
	$('#centerwell li').click(function() {
		window.open($(this).find('a').attr('href'));
	});

	$('#centerwell li').mouseenter(function() {
		if(!$(this).is(':animated')){
			$(this).animate({width: '49%'}, 300).siblings().animate({width: '16%'}, 300);
			$(this).find('h3').animate({backgroundPosition: '-16%'}, 300).parent().siblings().find('h3').animate({backgroundPosition: '0px'}, 300);
		}
	});*/

