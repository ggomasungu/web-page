$(function() {
// 백그라운드 비디오를 위해 페이지 로딩 두번 후 애니메이션 & 공지닫기
var $auto_close;
window.onload = function () {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	}
	else{
		$('#logo').css({
			animation: 'logo_show 1.3s steps(200, end)',
			visibility: 'visible'
		});
		$('.introduce').css({
			animation: 'intro_ani 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
			visibility: 'visible'
		});
	}
}

// 스크롤 이벤트 (cont2/footer)
$(window).scroll(function() {
	var $wsT = $(window).scrollTop(),
		 $cont2sT = $('#cont2').offset().top,
		 $cont3sT = $('#cont3').offset().top,
		 $foot_sT = $('footer').offset().top;

	if ($wsT < $cont2sT-450) {
		$('.pf_list_bg').stop(true,true);
		$('.pf').css('opacity', 0);
		$('.pf_list_bg').css('left','100%');
		$('.pf_bg').css('top', '-100%');
	}
	else if($wsT >= $cont2sT-450 && $wsT < $cont3sT-400) {
		$('.pf').css('opacity', 1);
		$('.pf_list_bg').css('left',0)
	}
	else if ($wsT >= $cont3sT-400 && $wsT < $cont3sT) {
		$('.pf_list_bg').stop(true,true);
		$('.pf').css('opacity', 0);
		$('.pf_list_bg').css('left','100%');
		$('.pf_bg').css('top', '-100%');
		$('.cont3_float').css({'height':0,'border':'100px solid white'});
	}
	else if ($wsT >= $cont3sT && $wsT < $cont3sT+400) {
		$('.cont3_float').css({'height':'50%','border':'10px solid #777'});
	}
	else if ($wsT >= $cont3sT+400 && $wsT < $foot_sT) {
		$('.cont3_float').css({'height':0,'border':'100px solid white'});
	}
});

// 공지 카운트다운 & 자동닫기
var count = 5; //기본 5초로 설정
notice_count = setInterval(function () {
	$('.countdown').html('<em>'+(count-1)+'</em>');
	if (count==1) {
		clearInterval(notice_count);
		$close_notice_func();
	}
	count--;
}, 1000);

// 공지 여닫기
var $close_notice_func = function () { //공지닫기
	clearInterval(notice_count)
	$('.notice').animate({top:'-5%'}, 500)
	$('.btn_open_notice').animate({top:0}, 500);
	$('.btn_open_notice').css('transition', '.3s');
}
$('.btn_close_notice').click($close_notice_func); //클릭 시 공지닫기
$('.btn_open_notice').click(function() { //클릭 시 공지열기
	$('.auto_close').empty();
	$('.btn_close_notice').html('<i class="fas fa-window-close"></i>');
	$('.btn_open_notice').css('transition', 'none');
	$(this).animate({top:'-5%'}, 500);
	$('.notice').animate({top:0}, 500)
});

// 테마변경 여닫기
$('#btn_open_theme').click(function() {
	$('#theme_box').css('overflow', 'visible');
	$('#theme_box').animate({width:'300px',height:'120px',padding:'20px'}, 500)
	$('#theme_box').find('i').css('font-size','5rem')
	$('.btn_close_theme').css('font-size', '3.3rem');
});
$('.btn_close_theme').click(function() {
	$('#theme_box').css('overflow', 'hidden');
	$('#theme_box').animate({width:0,height:0,padding:0}, 500)
	$('#theme_box').find('i').css('font-size',0)
});

// 바깥 영역 눌러도 닫히게
$(document).click(function(e) {
	if (!$('#btn_open_theme').is(e.target)&&$('#btn_open_theme').has(e.target).length===0) {
		$('#theme_box').css('overflow', 'hidden');
		$('#theme_box').animate({'width':0,'height':0,'padding':0}, 500);
		$('#theme_box').find('i').css('font-size',0);
	}
	else if (!$('.pf_modal').is(e.target)&&$('.pf_modal').has(e.target).length===0) {
		$('.pf_modal').css('display','none')
	}
});

// 테마변경
$('.theme_black').click(function() {
	$('body').css('background', 'black');
	$('[data-skew-bg]').css('background', 'black');
	$('#btn_open_theme').css({'color':'white','border-color':'white'});
	$('#theme_box').css('background', '#444');
	$('.btn_close_theme').css('color', 'white');
	$('.bg_cont1').css('background', 'black');
	$('.introduce').css('color', 'white');
	$('#pf_list').css('background', 'black');
	$('.contact_cont > div').css('background', 'black');
	$('.contact').css('border-bottom', '20px dashed #333');
	$('.contact_cont').css('background', '#333');
	$('.bg_cc2').css('background', '#333');
});
$('.theme_white').click(function() {
	$('body').css('background', 'white');
	$('[data-skew-bg]').css('background', 'white');
	$('#btn_open_theme').css({'color':'black','border-color':'black'});
	$('#theme_box').css('background', '#aaa');
	$('.btn_close_theme').css('color', 'black');
	$('.bg_cont1').css('background', 'white');
	$('.introduce').css('color', 'black');
	$('#pf_list').css('background', 'white');
	$('.contact_cont > div').css('background', 'white');
	$('.contact').css('border-bottom', '20px dashed #EBEB90');
	$('.contact_cont').css('background', '#EBEB90');
	$('.bg_cc2').css('background', '#EBEB90');
});

// 작품리스트 호버배경
$('.pf').hover(
	function() {
		$(this).find('.pf_bg').animate({top:0},300)
		$(this).find('.pf_tit_text').css('animation','pf_tit_flow 4s infinite ease-in-out');
	}, function() {
		$('.pf_bg').stop(true,true);
		$(this).find('.pf_bg').animate({top:'-100%'},300);
		$(this).find('.pf_tit_text').css('animation','none')
	}
);

// 포트폴리오 모달 팝업
var left = ($(window).scrollLeft()+($(window).width()-$('.pf_modal').width())/2),
	 top = ($(window).scrollTop()+($(window).height()-$('.pf_modal').height()));
$('.pf').click(function() {
	$('.pf_modal').css({'left':left,'top':top,'display':'block'})
});

// 푸터 애니메이션
$('.contact_cont>div').hover(
	function() {
		$(this).find('.bg_hover').animate({top: 0},500)
		$(this).find('.contact_tit').css('animation', 'jello-vertical 0.9s both')
	}, function() {
		$('.bg_hover').stop(true,true);
		$('.contact_tit').css('animation', 'none');
		$(this).find('.bg_hover').animate({top:'100%'},500)
	}
);

});