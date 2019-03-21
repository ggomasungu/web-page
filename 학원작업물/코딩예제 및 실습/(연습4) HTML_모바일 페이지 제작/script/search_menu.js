$(function() {
	// 검색창영역 여닫기
	$('#btnSearch').click(function() {
		$('#searchArea').toggle()
	});
	// 메뉴 클릭시
	$('.tab_m').each(function() {
		$(this).click(function() {
			$('.tab_m').removeClass('on');
			$(this).addClass('on');
		});
	});
});