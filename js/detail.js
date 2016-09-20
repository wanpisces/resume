$(function(){
	$('#wrap1').animate({'top':'0px'},800);
	function changeScreen(){
		var H = $(window).height();
		$('#wrap1').height(H);
		$('.fixBg').height(H);
	}
	changeScreen();
	
	$(window).scroll(function(){
		var H = $(window).height();
		//获取袁术到顶部的距离与滚动距离的差值
		var diff = function(obj){
			return obj.offset().top-$(window).scrollTop();
		}
		//文字动画效果
		var wrapTwo = $('#wrap2');
		var diffTwo = diff(wrapTwo);
		if(diffTwo<H){
			var time = 500;
			for(var i=0;i<16;i++){
				$('#wrap2 ul li.li span').eq(i).animate({'top':'0px'},time);
				time += 50;
			}
		}
		//经历的动画
		var perinfoOne = $('.personalInfo1');
		var diffPerinfo1 = diff(perinfoOne);
		if(diffPerinfo1+200<H){
			$('#wrap2 .personalInfo1 .contentEx ul').animate({'top':'0px'},700);
		}
		var perinfoTwo = $('.personalInfo2');
		var diffPerinfo2 = diff(perinfoTwo);
		if(diffPerinfo2+200<H){
			$('#wrap2 .personalInfo2 .contentEx ul').animate({'margin-top':'25px','top':'0px'},700);
		}
		
		//案例效果
		var caseTop = $('#wrap3');
		var diffCase = diff(caseTop);
		var peroid = 500;
		var worksWrap = $('#wrap3 .worksWrap');
//		alert(diffCase);
		if(diffCase+400<H){
			for(var j=0;j<worksWrap.length;j++){
				$('#wrap3 .worksWrap').eq(j).animate({'opacity':'1'},peroid);
				peroid += 1000;
			}
		}
		
//		滚动条到达底部
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
    		$('footer').animate({'height':'60px'},700);
        }
	});
	
	//经历的效果
	function exHover(obj){
		var mark = true;
		$('#wrap2 .personalInfo'+obj+' .contentEx ul li').hover(function(){
			$('#wrap2 .personalInfo'+obj+' .contentEx ul li').removeClass('active');
			$(this).addClass('active');
		});
	}
	exHover(1);
	exHover(2);
	
	
	function worksAnimate(){
		var mark = true;
		$('#wrap3 .worksWrap .worksLead').click(function(){
			var parent = $(this).parent()
			var h1 = parent.find('h1');
			var wroksPile = parent.find('.worksProfile');
			if(mark){
				h1.removeClass('topH').addClass('top0');
				h1.animate({'height':'60px','line-height':'60px'},200);
				wroksPile.animate({'top':'0px'},200);
				$(this).animate({'top':'30px'},200);
				$(this).find('span').removeClass('glyphicon-list').addClass('glyphicon-resize-small');
				mark = false;
			}else{
				h1.animate({'height':'42px','line-height':'42px'},200);
				h1.removeClass('top0').addClass('topH');
				wroksPile.animate({'top':'100%'},200);
				$(this).animate({'top':'15px'},200);
				$(this).find('span').removeClass('glyphicon-resize-small').addClass('glyphicon-list');
				mark = true;
			}
			
		});
	}
	worksAnimate();
	
	$(window).resize(function(){
		changeScreen();
		worksAnimate();
	});
	
	
	
});