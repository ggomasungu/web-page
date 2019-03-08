$(function() {
	//백그라운드 비디오를 위해 페이지 로딩안됐으면 한번 더 하는 함수
	window.onload = function () {
		if(!window.location.hash) {
			window.location = window.location + '#loaded';
			window.location.reload();
		}
		else{
			$('#logo').show();
			$('#logo').css('animation','logo_show 1.5s steps(200, end)')
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
});