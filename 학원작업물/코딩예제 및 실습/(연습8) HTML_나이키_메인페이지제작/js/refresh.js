$(function() {
	$('#gnb>li').each(function() {
		$(this).hover(function() {
			$('#gnb>li').removeClass('on')
			$('#gnb').find('i').removeClass('fas fa-sync-alt fa-spin')
			$(this).find('i').addClass('fas fa-sync-alt fa-spin')
		}, function() {
			$(this).find('i').removeClass('fas fa-sync-alt fa-spin')
			$('#gnb>li:first').addClass('on')
			$('#gnb>li:first').find('i').addClass('fas fa-sync-alt fa-spin')
		});
	});
});