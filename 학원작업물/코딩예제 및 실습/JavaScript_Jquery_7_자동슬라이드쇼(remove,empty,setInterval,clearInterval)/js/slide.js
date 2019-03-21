$(function() {
	var $slidebox = $('.slidebox'),
		 repeat;

	repeat = setInterval(slideshow,2000);

	// 슬라이드쇼
	function slideshow() {
		$slidebox.animate({left:'-100%'},500);
		setTimeout(function () {
			$slidebox.css('left', '0');
			$slidebox.find('img').first().appendTo($slidebox);
			findnow();
		},550)
	}
	// 현재 이미지위치 표시
	function findnow() {
		var now;
		$('.indicator').find('li').removeClass('vis_img');
		now=$slidebox.find('img').first().attr('class');
		$('.indicator').find('.'+now).addClass('vis_img');
	}

	// 재생정지
	$('.play').click(function() {
		$('.playstop').find('li').removeClass('slideon');
		$(this).addClass('slideon')
		repeat = setInterval(slideshow,2000);
	});
	$('.stop').click(function() {
		stop();
	});
	function stop() {
		$('.playstop').find('li').removeClass('slideon');
		$('.stop').addClass('slideon');
		clearInterval(repeat);
	}

	// 좌우버튼
	$('.btn_next').click(function() {
		stop();
		slideshow();
	});
	$('.btn_pre').click(function() {
		stop();
		$slidebox.find('img').last().prependTo($slidebox);
		$slidebox.css('left', '-100%');
		$slidebox.animate({left:'0'},500);
		setTimeout(findnow(),550)
	});

	//표시기 개별버튼
	var $indicator = $('.indicator').find('li'),
		 $indilength = $indicator.length,
		 $turn = 0;

	$indicator.each(function() {
		$(this).click(function() {
			
		});
	});


	//section2 다른연습
	//$('h3').first().remove();
	//$('h3').empty();

	//$('section:last').append($('<img>').attr({'src':'images/things-1.jpeg','width':300}));
	//$('<img>').attr({'src':'images/things-1.jpeg','width':300}).appendTo('section:last')

	//$('section:last').prepend($('<img>').attr({'src':'images/things-1.jpeg','width':300}))
	//$('<img>').attr({'src':'images/things-1.jpeg','width':300}).prependTo('section:last')

	// append = after / prepend = before
	// appendTo = insertAfter / prependTo = insertBefore
});