if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
	new WOW().init();
};
//初始化
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	//滚动条初始化
	$("html").niceScroll()
		//			轮播图初始化
	$('#slide').carousel({
		interval: 3500
	})
	var a = '<a href="#about" class="scroll-down toscroll hidden-xs"><span class="down-button scroll-button"></span><span class="down-button scroll-button"></span></a>'
	$('.wrap').add(a)

})
$(function() {
	var ls = localStorage.getItem('name')
	var num = ls ? Number(ls) : 1;
	$('#nav').on('click', 'a:not([href=""])', function() {
			num = $(this).parent().index()
			localStorage.setItem('name', num)
			htmlAnimate($($(this).attr('href')).offset().top)
			return false;
		})
		//	$('#shang').on('click', function() {
		//		localStorage.setItem('name', num)
		//		htmlAnimate(0)
		//		return false;
		//	})
	$('.xia').on('click', function() {
		localStorage.setItem('name', num)
		var index = Number($(this).parent().attr('id').slice(-1)) + 1;
		htmlAnimate($($(this).attr('href')).offset().top)
		console.log("xia")
	})
	$('.navbar-collapse').on('activate.bs.scrollspy', function() {
		localStorage.setItem('name', num)
		var index = $('.navbar .active').index() + 1; //获取下标
		if (index > 1) {
			$('.navbar').css({
				backgroundColor: "rgba(0,0,0,.4)"
			})
		} else if (index === 1) {
			$('.navbar').css({
				backgroundColor: "transparent"
			})
		}

	})

	function htmlAnimate(positions) {
		localStorage.setItem('name', num)
		$('html,body').animate({
			scrollTop: positions
		}, 600, function() {
			boo = true;
		})
	}
	var boo = true;
	$(function() {
		$("body").on('wheel', function(e) {
			e.stopPropagation();
			if (boo) {
				boo = false;
				if (e.originalEvent.deltaY > 0) {
					num++;
					if (num > 6) {
						num = 1
					}
				} else {
					num--;
					if (num < 1) {
						num = 6
					}
				}
				var positions = $('#sec' + num).offset().top;
				htmlAnimate(positions)
			}
		})
	})
	$(function() {
		var y1, y2, x1, x2, index, index2;
		$('main').on('mousedown', function(e) {
			e.stopPropagation();
			y1 = e.pageY;
		}).on('mouseup', function(e) {
			e.stopPropagation();
			y2 = e.pageY;
			index = $('.navbar .active').index() + 1;
			if (Math.abs(y1 - y2) < 100) {
				return false;
			}
			if (y2 < y1) {
				index++;
				if (index > 6) {
					index = 1;
				}
			}
			if (y2 > y1) {
				index--;
				if (index < 1) {
					index = 6;
				}
			}
			$('html,body').animate({
				scrollTop: $('#sec' + index).offset().top
			}, 600);
			e.stopPropagation();
		})
		$('main').on('mousedown', function(e) {
			e.stopPropagation();
			x1 = e.pageX;
		}).on('mouseup', function(e) {
			e.stopPropagation();
			x2 = e.pageX;
			index2 = $('#tabs .active').index() + 1;

			if (Math.abs(x1 - x2) < 100) {
				return false;
			}

			if (x2 < x1) {
				$('.num' + index2).removeClass("active")
				$('.ol' + index2).removeClass("active")
				index2++;
				if (index2 > 5) {
					index2 = 1;
				}
				$('.num' + index2).addClass("active");
				$('.ol' + index2).addClass("active");
				return false;
			}
			if (x2 > x1) {
				$('.num' + index2).removeClass("active")
				$('.ol' + index2).removeClass("active")
				index2--;
				if (index2 < 1) {
					index2 = 5;
				}
				$('.num' + index2).addClass("active");
				$('.ol' + index2).addClass("active");
				return false;
			}

		})
	})
	var index3
	$('#sec2 .box').on('mousedown', function(e) {
		e.stopPropagation();
		x1 = e.pageX;
	}).on('mouseup', function(e) {
		e.stopPropagation();
		x2 = e.pageX;
		index3 = $('#about-nav .active').index() + 1;

		if (Math.abs(x1 - x2) < 100) {
			return false;
		}

		if (x2 < x1) {
			$('.nu' + index3).removeClass("active")
			$('#about' + index3).removeClass("active in")
			index3++;
			if (index3 > 4) {
				index3 = 1;
			}
			$('.nu' + index3).addClass("active");
			$('#about' + index3).addClass("active in");
			return false;
		}
		if (x2 > x1) {
			$('.nu' + index3).removeClass("active")
			$('#about' + index3).removeClass("active in")
			index3--;
			if (index3 < 1) {
				index3 = 4;
			}
			$('.nu' + index3).addClass("active");
			$('#about' + index3).addClass("active in");
			return false;
		}

	})
})