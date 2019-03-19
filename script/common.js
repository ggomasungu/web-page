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

	if ($wsT < $cont2sT-500) {
		$('.pf_list_bg').stop(true,true);
		$('.pf').css('opacity', 0);
		$('.pf_list_bg').css('left','100%');
		$('.pf_bg').css('top', '-100%');
	}
	else if($wsT >= $cont2sT-500 && $wsT < $cont3sT-300) {
		$('.pf').css('opacity', 1);
		$('.pf_list_bg').css('left',0)
	}
	else if ($wsT >= $cont3sT-300 && $wsT < $cont3sT-100) {
		$('.pf_list_bg').stop(true,true);
		$('.pf').css('opacity', 0);
		$('.pf_list_bg').css('left','100%');
		$('.pf_bg').css('top', '-100%');
		$('.cont3_float').css({'height':0,'border-width':'100px'});
		$('.float_bg').css({'letter-spacing':'20px','color':'white','font-size':'500%'});
	}
	else if ($wsT >= $cont3sT-100 && $wsT < $cont3sT+450) {
		$('.cont3_float').css({'height':'50%','border-width':'10px'});
		$('.float_bg').css({'letter-spacing':0,'color':'#777','font-size':'100%'});
	}
	else if ($wsT >= $cont3sT+450 && $wsT < $foot_sT-300) {
		$('.cont3_float').css({'height':0,'border-width':'100px'});
		$('.float_bg').css({'letter-spacing':'50px','color':'white'});
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
	$('#theme_box').fadeIn()
});
$('.btn_close_theme').click(function() {
	$('#theme_box').fadeOut()
});

// 바깥 영역 눌러도 닫히게
$(document).click(function(e) {
	if (!$('#btn_open_theme').is(e.target)&&$('#btn_open_theme').has(e.target).length===0) {
		$('#theme_box').fadeOut()
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
	$('.cont3_float').css('border-color', 'black');
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
	$('.cont3_float').css('border-color', 'white');
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

// 포트폴리오 모달 팝업 여닫기
var $data_pf_link;
$('.pf').click(function() {
	$('body').css('overflow-y', 'hidden');
	$modal_width = $(window).width();
	$modal_height = $(window).height();
	$modal_top = $(window).scrollTop()-$('#cont2').offset().top;
	$('.pf_modal').css({'top':$modal_top,'width':$modal_width,'height':$modal_height});
	$('.pf_modal').fadeIn(500);
	$('.modal_bg').css({'background-image':$(this).find('.pf_tit_text').data('pf-bg')});
	$('.modal_bg').fadeIn(500);
	pftit = $(this).find('.pf_tit_text').text();
	$('.mouse_move_tit').html(pftit+'&nbsp;<i class="fas fa-question-circle"></i>');
	$('.modal_cont').html($(this).find('.pf_cont_detail').html());
	cc = $(this).find('.concept_color').data('concept-color');
	ctc = $(this).find('.concept_color').data('concept-color-text');
	$('.modal_cont').find('.concept_color').css('color',cc);
	$('.modal_cont').find('.hex_code').text(cc);
	$('.hex_code').css({'background':cc,'color':ctc,'padding':'0 5px'});
	$data_pf_link=$(this).find('.pf_tit_text').data('pf-link')
});
$('.pf_modal').click(function() {
	$('body').css('overflow-y', 'visible');
	$(this).fadeOut(500);
	$('.modal_bg').fadeOut(500)
});

// 모달 팝업 닫기버튼
$('.btn_modal_close').click(function() {
	$('body').css('overflow-y', 'visible');
	$('.modal_bg').fadeOut(500)
});


// 모달 팝업 배경에서 마우스 따라다니는 팝업
$('.pf_modal').hover(
	function() {
		$(this).mousemove(function(e) {
			mmX = e.pageX-$('.pf_modal').offset().left+30;
			mmY = e.pageY-$('.pf_modal').offset().top;
			$('.mouse_move').css({'top':mmY,'left':mmX});
			$('.mouse_move').show();
		});
	}, function() {
		$('.mouse_move').hide();
	}
);

// 모달 팝업 배경에서 마우스 따라다니는 팝업2
function popup2(e) {
	mmX = e.pageX-$('.pf_modal').offset().left+30;
	mmY = e.pageY-$('.pf_modal').offset().top+65;
	$('.mouse_move2').css({'top':mmY,'left':mmX});
	$('.mouse_move2').show();
}
$('.modal_bg').hover(
	function() {
		$(this).mousemove(popup2);
		$('.mouse_move2').text('사진 클릭 시, 새 페이지로 연결됩니다.')
	}, function() {
		$('.mouse_move2').hide();
	}
);
$('.modal_cont').hover(
	function() {
		$(this).mousemove(popup2);
		$('.mouse_move2').text('웹페이지 제작 설명 및 후기입니다.')
	}, function() {
		$('.mouse_move2').hide();
	}
)

// 모달 팝업 배경누르면 새페이지 띄우기
$('.modal_bg').click(function() {
	window.open($data_pf_link)
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