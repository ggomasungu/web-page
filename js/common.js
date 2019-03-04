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
});