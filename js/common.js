$(function() {
	//백그라운드 비디오를 위해 페이지 로딩 두번 후 로고 애니메이션
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
		}
	}

	// 공지 여닫기
	$('.btn_close_notice').click(function() {
		$('.notice').animate({top:'-5%'}, 500)
		$('.btn_open_notice').animate({top:0}, 500)
	});
	$('.btn_open_notice').click(function() {
		$(this).animate({top:'-5%'}, 500)
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

	// 푸터 애니메이션
	$('.contact_cont>div').each(function() {
		$(this).hover(function() {
			$(this).find('.bg_hover').animate({top: 0},500)
		}, function() {
			$('.bg_hover').stop(true,true);
			$(this).find('.bg_hover').animate({top:'430px'},500)
		});
	});
});