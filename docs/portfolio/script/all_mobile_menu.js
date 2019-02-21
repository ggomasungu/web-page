$(function() {
	// 모바일메뉴버튼
	$('#btnmMenu').click(function() {
		$('#mMenu').toggleClass('mMenuOpen');
		$('.mSubul').removeClass('mSubulOpen');
		$('.mMlip').removeClass('mMlipClick');
	});

	// 모바일메뉴 닫기버튼
	$('#mMenuHeader').find('p').click(function() {
		$('#mMenu').removeClass('mMenuOpen')
		$('.mSubul').removeClass('mSubulOpen');
		$('.mMlip').removeClass('mMlipClick');
	});

	// 모바일메뉴 메뉴작동
	$('.mMlip').each(function() {
		$(this).click(function() {
			$('.mSubul').removeClass('mSubulOpen');
			$('.mMlip').removeClass('mMlipClick');
			$(this).toggleClass('mMlipClick');
			$(this).siblings().toggleClass('mSubulOpen');
		});
	});
});