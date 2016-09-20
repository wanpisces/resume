$(function(){
	var scrollTop = $(window).scrollTop();
	var winHeight = $(window).height();
	$('.s-skin-wrap').animate({top:'0px'},900);
	$('.s-skin-wrap').css('height',winHeight+'px');
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var winHeight = $(window).height();
		var skillTop = $('.main-skill-wrap').offset().top;
		var infoTop = $('.mainThree').offset().top;
		var moreTop = $('.mainMore').offset().top
		var delay=0;
		//技能模块
		if((skillTop-scrollTop+200)<winHeight){
			for(var i=0 ;i<6;i++){
				$('.main-skill-wrap li').eq(i).find('.liDivMove').css('animation-delay',delay+'ms');
				$('.main-skill-wrap li').eq(i).find('.liDiv').addClass('liDivMove');
				delay+=100;
			}
		}
		if(infoTop-scrollTop+120<winHeight){
			$('.mainThree').css('transform','scale(1)');
			$('.mainThree').addClass('mainInfo');
		}
		if(moreTop-scrollTop+200<winHeight){
			$('.mainMore-wrap').css('display','block');
			$('.mainMore-wrap').animate({top:'0px'},300);
		}
		
	});
	$('.main-skill-wrap li').mouseover(function(){
        $('.main-skill-wrap li .liDiv').removeClass('liDivMove');
		$(this).find('.liDiv').addClass('liDivMove');
	});
});