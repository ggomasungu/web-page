$(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x, y){
		balloon.css({ left: x + 15, top: y });
	}
	// 풍선 도움말을 표시하는 함수
	function showBalloon(){
		 balloon.stop(); //이미 애니메이션 중인 경우, 중지
		balloon.css('opacity',0).show(); // 투명한 상태로 표시
		balloon.animate({ opacity: 1 }, 200); // 0.2초후에 투명도를 1로
	}

	// 풍선 도움말을 숨기는 함수
	function hideBalloon(){
		balloon.animate({ opacity: 0 }, 200); // 0.2초후에 투명하게
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
