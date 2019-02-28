$(function() {
	// 공지 여닫기
	$('.btn_close_notice').click(function() {
		$('.notice').css('display', 'none');
		$('.btn_open_notice').css('display', 'block');
	});
	$('.btn_open_notice').click(function() {
		$(this).css('display', 'none');
		$('.notice').css('display', 'block');
	});
});