$(function() {
	//백그라운드 비디오를 위해 페이지 로딩 두번 후 애니메이션 & 공지닫기
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
			$auto_close = setTimeout($close_notice_func,5000) // 공지 자동닫기
		}
	}

	//스크롤 이벤트 (cont2/footer)
	$(window).scroll(function() {
		var $scroll = $(window).scrollTop(),
			 $cont2scroll = $('#cont2').offset().top, // 865
			 $cont3scroll = $('#cont3').offset().top; // 약2088.7

		if ($scroll < $cont2scroll-300) {
			$('.pf_list_bg').stop(true,true);
			$('.pf').css('opacity', 0);
			$('.pf_list_bg').css('left','100%')
		}
		else if($scroll >= $cont2scroll-300 && $scroll < $cont3scroll-400) {
			$('.pf').css('opacity', 1);
			$('.pf_list_bg').css('left',0)
		}
		else if ($scroll >= $cont3scroll-400 && $scroll < $cont3scroll) {
			$('.pf_list_bg').stop(true,true);
			$('.pf').css('opacity', 0);
			$('.pf_list_bg').css('left','100%');
		}
	});

	// 공지 여닫기
	var $close_notice_func = function () { //공지닫기
		clearTimeout($auto_close);
		$('.notice').animate({top:'-5%'}, 500)
		$('.btn_open_notice').animate({top:0}, 500);
		$('.btn_open_notice').css('transition', '.5s');
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

	//바깥 영역 눌러도 닫히게
	$(document).click(function(e) {
		if (!$('#btn_open_theme').is(e.target)&&$('#btn_open_theme').has(e.target).length===0) {
			$('#theme_box').css('overflow', 'hidden');
			$('#theme_box').animate({width:0,height:0,padding:0}, 500)
			$('#theme_box').find('i').css('font-size',0)
		}
	});

	// 테마변경
	$('.theme_black').click(function() {
		$('body').css('background', 'black');
		$('[data-skew-bg]').css('background', 'black');
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

	//작품리스트 호버배경
	$('.pf').each(function() {
		$(this).hover(function() {
			$(this).find('.pf_bg').animate({top: 0},300)
		}, function() {
			$('.pf_bg').stop(true,true);
			$(this).find('.pf_bg').animate({top: '-100%'},300)
		});
	});

	// 푸터 애니메이션
	$('.contact_cont>div').each(function() {
		$(this).hover(function() {
			$(this).find('.bg_hover').animate({top: 0},500)
			$(this).find('.contact_tit').css('animation', 'jello-vertical 0.9s both');
		}, function() {
			$('.bg_hover').stop(true,true);
			$('.contact_tit').css('animation', 'none');
			$(this).find('.bg_hover').animate({top:'100%'},500)
		});
	});
});