$(function(){
	$('.btn_slides_prev').click(function() {
		if (!$('#slides').find('li').first().is(':hidden')) {
			var $slv = $('#slides li:visible'),
				 $sll = $('#slides li:last');
			$slv.first().hide();
			$sll.prependTo('#slides').fadeIn();
			return false;
		}
	});

	$('.btn_slides_next').click(function() {
		if (!$('#slides').find('li').last().is(':visible')) {
			var $slv = $('#slides li:visible');
			$slv.first().hide().next().fadeIn();
			$slv.appendTo('#slides');
			return false;
		}
	});
});