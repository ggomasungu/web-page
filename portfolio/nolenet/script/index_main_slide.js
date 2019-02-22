$(function() {
	// 전역변수
	var $slideimg = $('#slideArea').find('img'),
		 $playstop = $('#slidebtns').find('.btnslide0'),
		 // $sln = $slideli.length,
		 $sin = $slideimg.length, // 고정값4
		 $sincount = $slideimg.length, // 4기준으로 증가
		 $sin0 = 0, // 증가해서 4까지
		 $sinmax = $sin+1, // 최대값5
		 now = 0,
		 repeat;

	// 이미지에 개수에 따라 이미지와 버튼에 해당순서 클래스 부여 및 버튼 생성
	function addClassImg() {
		while ($sincount-($sin-1)<$sinmax) {
			$sin0=$sin==$sin0?0:$sin0+=1;
			$slideimg.eq($sin0-1).addClass('si_'+$sin0);
			$('#slidebtns').append('<li class="btnslide si_'+$sin0+'"><i class="far fa-circle"></i></li>')
			$sincount+=1
		};
	}
	addClassImg();

	// 첫화면 보이게
	function firstscreen() {
		$slideimg.first().css({transform:'translateX(-100%)'})
	};
	firstscreen();

	// 자동 슬라이드 함수	
	function slidenext() {
		now=now==$sin-1?0:now+=1;
		findnow();
		$slideimg.eq(now-1).css({transform:'translateX(-200%)',transition:'1s'});
		$slideimg.eq(now).css({transform:'translateX(-100%)',transition:'1s'});
		setTimeout(
			function() {
				$slideimg.css({transform:'translateX(0)',transition:'none'});
				$slideimg.eq(now).css({transform:'translateX(-100%)',transition:'1s'});
			}
		,1000);
	};
	// 자동 슬라이드 반복
	repeat = setInterval(slidenext,3000);

	//현재 위치 찾기
	function findnow() {
		var findnow = $slideimg.eq(now).attr('class'),
			 findprev = $slideimg.eq(now-1).attr('class');
		$('#slidebtns').find('li.'+findnow+'>i').removeClass('far');
		$('#slidebtns').find('li.'+findnow+'>i').addClass('fas');
		$('#slidebtns').find('li.'+findprev+'>i').removeClass('fas');
		$('#slidebtns').find('li.'+findprev+'>i').addClass('far');
	}
	findnow();

	
	// // 슬라이드 인디케이터 표시 및 이동
	var $btnli = $('#slidebtns').find('.btnslide');
	$btnli.each(function() {
		$(this).click(function() {
			var turnnow = $btnli.index($(this)),

			$playstop.find('i').removeClass('fa-pause-circle');
			$playstop.find('i').addClass('fa-play-circle');
			$btnli.find('i').removeClass('fas');
			$btnli.find('i').addClass('far');
			$(this).find('i').removeClass('far');
			$(this).find('i').addClass('fas');

			// now=turnnow;
			// clearInterval(repeat);

			// $slideimg.eq(now-1).css({transform:'translateX(-200%)',transition:'1s'});
			// $slideimg.eq(now).css({transform:'translateX(-100%)',transition:'1s'});

		});
	});


/*
	function clickindicator() {
			var now = $(this).attr('class');
			$slideli.find('i').removeClass('fas');
			$slideli.find('i').addClass('far');
			$(this).find('i').removeClass('far');
			$(this).find('i').addClass('fas')
			// if ($slideimgs.find('img').eq(0).attr('class')==now) {
			// 	$(this).css('property', 'value');
			// }
	}

	// 좌우버튼
	$('.btnNext').click(function() {
		clearInterval(repeat);
		$playstop.find('i').removeClass('fa-pause-circle');
		$playstop.find('i').addClass('fa-play-circle');
		slidenext();
	});
	$('.btnPre').click(function() {
		clearInterval(repeat);
		$playstop.find('i').removeClass('fa-pause-circle');
		$playstop.find('i').addClass('fa-play-circle');
		$('#slideimgs').find('img').last().prependTo('#slideimgs');
		$slideimgs.css('left', '-100%');
		$slideimgs.animate({left:'0'},800);
		setTimeout(function () {
			$('#slideimgs').find('img').first().next();
		},850)
	});
	*/

	// 정지재생버튼
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