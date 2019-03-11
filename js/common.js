$(function() {
	//백그라운드 비디오를 위해 페이지 로딩안됐으면 한번 더 하는 함수
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

	// 테마변경
	$('.theme_black').click(function() {
		$('body').css('background', 'black');
		$('[data-skew-bg]').css('background', 'black');
		$('.bg_cont1').css('background', 'black');
		$('.introduce').css('color', 'white');
		$('#pf_list').css('background', 'black');
		$('.contact_cont > div').css('background', 'black');
		$('.contact').css('border-bottom', '20px dashed #1b1b1b');
		$('.contact_cont').css('background', '#1b1b1b');
		$('.bg_cc2').css('background', '#1b1b1b');
	});	
	$('.theme_white').click(function() {
		$('body').css('background', 'white');
		$('[data-skew-bg]').css('background', 'white');
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