$(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x, y){
		balloon.css({ left: x + 15, top: y });
	}
	function showBalloon(){
		balloon.stop();
		balloon.css('opacity',0).show();
		balloon.animate({ opacity: 1 }, 200);
	}
	function hideBalloon(){
		balloon.stop();
		balloon.animate(
			{ opacity: 0 }, 200,
			function(){ balloon.hide(); }
		);
	}
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(function(event){
			balloon.text(text);
			updateBalloonPosition(event.pageX, event.pageY); 
			showBalloon();
		},function(){
			hideBalloon();
		})
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
});
