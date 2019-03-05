$(function() {
	// 공지 여닫기
	$('.btn_close_notice').click(function() {
		$('.notice').animate({top:'-5%'}, 500)
		$('.btn_open_notice').animate({top:0}, 500)
	});
	$('.btn_open_notice').click(function() {
		$(this).animate({top:'-5%'}, 500)
		$('.notice').animate({top:0}, 500)
	});

	// 백그라운드 비디오의 원활한 재생을 위한 한번 자동 새로고침
	// 페이지 로딩이 끝나지 않았으면 새로고침 한번 더
	window.onload = function() {
		if(!window.location.hash) {
			window.location = window.location + '#loaded';
			window.location.reload();
		}
		else{

		}
	}
});