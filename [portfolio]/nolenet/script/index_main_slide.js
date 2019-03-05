$(function() {
	// 최상위로
	$('#go_to_main').hover(function() {
		$(this).css('animation', 'none');
		$(this).animate({left: 0},200)
	}, function() {
		$(this).animate({left: '-90px'},200)
		$(this).css('animation', 'gotomain 4s infinite');
	});

	// 변수선언
	var $slidebox = $('#slideBox'),
		 $slideimg = $('#slideBox').find('img');

	// 이미지에 개수에 따라 이미지와 버튼에 해당순서 클래스 부여 및 버튼 생성
	function addClassImg() {
		var $sin = $slideimg.length,			// 고정값4
			 $sincount = $slideimg.length,	// 4기준으로 증가
			 $sin0 = 0,								// 증가해서 4까지
			 $sinmax = $sin+1;					// 최대값5
		while ($sincount-($sin-1)<$sinmax) {
			$sin0=$sin==$sin0?0:$sin0+=1;
			$slideimg.eq($sin0-1).addClass('si_'+$sin0);
			$('#slidebtns').append('<li class="btnslide si_'+$sin0+'"><i class="far fa-circle"></i></li>')
			$sincount+=1
		};
	}
	addClassImg();

	// 자동 슬라이드 함수
	var nowimg = 0, dotnow = 0,
		 slength = $slideimg.length;			// 4므로 인덱스 4번째 3나오게 하려고 -1
	function slidenext() {
		nowimg=nowimg<=(slength-1)*-100?0:nowimg-=100;
		$slidebox.animate({left:nowimg+'%'}, 700);
		finddot();
	};

	// dot 위치 표시 함수
	function finddot() {
		dotnow=nowimg*-0.01
		$btnli.find('i').removeClass('fas');
		$btnli.find('i').addClass('far');
		$('.btnslide').eq(dotnow).find('i').removeClass('far');
		$('.btnslide').eq(dotnow).find('i').addClass('fas');
	};

	// 첫 이미지 dot 표시
	$('.btnslide').eq(0).find('i').removeClass('far');
	$('.btnslide').eq(0).find('i').addClass('fas');

	// 자동 슬라이드 반복
	var repeat;
	repeat = setInterval(slidenext,3000);

	// 좌우버튼
	$('.btnNext').click(function() {
		clearInterval(repeat);
		$slidebox.stop(true);
		$playstop.find('i').removeClass('fa-pause-circle');
		$playstop.find('i').addClass('fa-play-circle');
		slidenext();
	});
	$('.btnPre').click(function() {
		clearInterval(repeat);
		$slidebox.stop(true);
		$playstop.find('i').removeClass('fa-pause-circle');
		$playstop.find('i').addClass('fa-play-circle');

		if (0>nowimg&&nowimg>=-300) {
			nowimg+=100
			$slidebox.animate({left:nowimg+'%'}, 700);
			$btnli.find('i').removeClass('fas');
			$btnli.find('i').addClass('far');			
		}
		else {
			nowimg-=300
			$slidebox.animate({left:nowimg+'%'}, 700);
			$btnli.find('i').removeClass('fas');
			$btnli.find('i').addClass('far');			
		}
		finddot();
	});
	
	// 슬라이드 dot 클릭 이동
	var $btnli = $('#slidebtns').find('.btnslide');
	$btnli.each(function() {
		$(this).click(function() {
			var $dotclick = $btnli.index($(this))*-100;
			clearInterval(repeat);
			$slidebox.stop(true);
			$slidebox.animate({left:$dotclick+'%'}, 700);
			nowimg=$dotclick;
			$playstop.find('i').removeClass('fa-pause-circle');
			$playstop.find('i').addClass('fa-play-circle');
			$btnli.find('i').removeClass('fas');
			$btnli.find('i').addClass('far');
			$(this).find('i').removeClass('far');
			$(this).find('i').addClass('fas');
		});
	});

	// 정지재생버튼
	var $playstop = $('#slidebtns').find('.btnslide0');

	$playstop.click(function(){
		if ($playstop.find('i').hasClass('fa-pause-circle')) {
			clearInterval(repeat);
			$playstop.find('i').removeClass('fa-pause-circle');
			$playstop.find('i').addClass('fa-play-circle')
		}
		else {
			repeat = setInterval(slidenext,3000);
			$playstop.find('i').removeClass('fa-play-circle');
			$playstop.find('i').addClass('fa-pause-circle')
		}
	});
});