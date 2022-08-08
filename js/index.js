$('.header .heade .left .login').mouseenter(function() {
	$(this).children().show()
})
$('.header .heade .left .login').mouseleave(function() {
	$(this).children().hide()
})
$('.heade .right ul li:nth-of-type(2)').mouseenter(function() {
	$(this).children().eq(1).show()
})
$('.heade .right ul li:nth-of-type(2)').mouseleave(function() {
	$(this).children().eq(1).hide()
})

$('main .right .down .downdown .selectmoney a').click(function() {
	$(this).addClass('aactive')
})
$('main .right .down .downdown .selectmoney a').click(function() {
	$(this).siblings().removeClass('aactive')
})

// $('main .left .leftzz').mouseenter(function() {
// 	$('main .center').css("display","none")
// })
// $('main .left .leftzz').mouseleave(function() {
// 	$('main .center').css("display","none")
// })

$('main .left .leftzz li').hover(function() {
	var t = $(this).index
	$('main .center').hide()
	$(this).children().eq(1).show()
	console.log($(this).index)
}, function() {
	$('main .center').show()
	$(this).children().eq(1).hide()
})



//淡入淡出

var num = 0;
var timer
go()

function go() {
	timer = setInterval(function() {
		num++;
		if (num == 4) num = 0;
		// fadeIn(时间ms)淡入
		no()

		// $('main .center .nan li)').click(function() {
		// 	var t = $(this).index()
		// 	console.log(t)
		// })


	}, 3000)
}

function no() {
	$('.center .box li').eq(num).fadeIn(600)
	// .css("background-color","red");
	$('.center .box li').eq(num).siblings().fadeOut(800)
	$('main .center .nan li').eq(num).addClass('active')
	$('main .center .nan li').eq(num).siblings().removeClass('active')
	if (num == 0) {
		$('main').css("background-color", "rgb(69, 157, 251)").fadeIn(600)
	} else if (num == 1) {
		$('main').css("background-color", "rgb(208, 225, 253)").fadeIn(600)
	} else if (num == 2) {
		$('main').css("background-color", "rgb(30, 154, 242)").fadeIn(600)
	} else {
		$('main').css("background-color", "rgb(10, 61, 206)").fadeIn(600)
	}
}

$('main .center .nan li').click(function() {
	num = $(this).index()
	no()
})

$('main .center').hover(function() {
	clearInterval(timer)
	$('main .center .lleft').css("display", "block")
	$('main .center .rright').css("display", "block")
}, function() {
	$('main .center .lleft').css("display", "none")
	$('main .center .rright').css("display", "none")
	go()
})

$('main .center .lleft').click(function() {
	num--;
	if (num == -1) num = 3
	no()
})
$('main .center .rright').click(function() {
	num++;
	if (num == 4) num = 0
	no()
})
// 4F选项卡(左右箭头的)
$('.contentxia .four .louzhuanqu .tabbox .tabboxinner h4 span:nth-of-type(2) #left').click(function() {
	$('.contentxia .four .louzhuanqu .tabbox .tabboxinner .insidel').show()
	$('.contentxia .four .louzhuanqu .tabbox .tabboxinner .insider').hide()
})
$('.contentxia .four .louzhuanqu .tabbox .tabboxinner h4 span:nth-of-type(2) #right').click(function() {
	$('.contentxia .four .louzhuanqu .tabbox .tabboxinner .insider').show()
	$('.contentxia .four .louzhuanqu .tabbox .tabboxinner .insidel').hide()
})
$('.contentxia .four .louzhuanqu .tabboxrg .recomandbox h4 span:nth-of-type(2) #leftl').click(function() {
	$('.contentxia .four .louzhuanqu .tabboxrg .insidel').show()
	$('.contentxia .four .louzhuanqu .tabboxrg .insider').hide()
})
$('.contentxia .four .louzhuanqu .tabboxrg .recomandbox h4 span:nth-of-type(2) #rightr').click(function() {
	$('.contentxia .four .louzhuanqu .tabboxrg .insider').show()
	$('.contentxia .four .louzhuanqu .tabboxrg .insidel').hide()
})
//4F左侧选项卡
$('.contentxia .four .louzhuanqu .tabnav li').mouseenter(function() {
	$(this).addClass("active")
	$(this).siblings().removeClass("active")
	var t = $(this).index()
	console.log(t)
	$('.contentxia .four .louzhuanqu .seleno').children().eq(3-t).show()
	$('.contentxia .four .louzhuanqu .seleno').children().eq(3-t).siblings().hide()
})

// $('.contentxia .four .louzhuanqu .tabnav li:nth-of-type(1)').mouseenter(function() {
// 	$(this).addClass("active")
// 	$(this).siblings().removeClass("active")
// 	$('.contentxia .four .louzhuanqu .taone').show()
// 	$('.contentxia .four .louzhuanqu .tatwo').hide()
// })
// $('.contentxia .four .louzhuanqu .tabnav li:nth-of-type(2)').mouseenter(function() {
// 	$(this).addClass("active")
// 	$(this).siblings().removeClass("active")
// 	$('.contentxia .four .louzhuanqu .tatwo').show()
// 	$('.contentxia .four .louzhuanqu .taone').hide()
// })
// $('.contentxia .four .louzhuanqu .tabnav li:nth-of-type(3)').mouseenter(function() {
// 	$(this).addClass("active")
// 	$(this).siblings().removeClass("active")
// 	$('.contentxia .four .louzhuanqu .tathree').show()
// 	$('.contentxia .four .louzhuanqu .taone').hide()
// 	$('.contentxia .four .louzhuanqu .tatwo').hide()
// })
// 地图下拉
$('.input .topcity').click(function() {
	$('.input .left .xiadrop').css("display", "block")
	return false
})
$(document).click(function() {
	$('.input .left .xiadrop').css("display", "none")
})

//固定导航栏
$(window).scroll(function() {
	if ($(window).scrollTop() >= $('main .left .leftzz li').eq(6).offset().top) {
		console.log(111)
		$('#fixhead').css("display", "block")
	} else {
		$('#fixhead').css("display", "none")
	}
})
//左侧固定楼区
//滚轮滚到一定距离显示左侧隐藏导航栏
$(window).scroll(function() {
	if ($(window).scrollTop() >= $('.youhui').offset().top) {
		$('#leftmenu').css("display", "block")
	} else {
		$('#leftmenu').css("display", "none")
	}
})
//实现点击li页面滚动到哪一个楼区
$('#leftmenu ul li.putong').click(function() {
	var t = $(this).index()
	$('html,body').animate({
		'scrollTop': $('.contentxia').children().eq(t).offset().top
	})
	$(this).children().addClass('active');
	$(this).siblings().children().removeClass('active');
})
//返回顶部
$('#leftmenu ul li.back').click(function() {
	var timer = setInterval(function() {
		var toTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 判断是否到达顶部，到达顶部停止滚动，没到达顶部继续滚动
		if (toTop == 0) {
			clearInterval(timer);
		} else {
			// 设置滚动速度
			var speed = Math.ceil(toTop / 5);
			// 页面向上滚动
			document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
		}
	}, 50);
})





$(window).scroll(function() {
	if ($(window).scrollTop() >= $('.youhui').offset().top && $(window).scrollTop() < $('.contentxia .one').offset().top) {
		$('#leftmenu ul li').eq(0).children().addClass('active');
		$('#leftmenu ul li').eq(0).siblings().children().removeClass('active');
	} else if ($(window).scrollTop() >= $('.contentxia .one').offset().top && $(window).scrollTop() < $(
			'.contentxia .two').offset().top) {
		$('#leftmenu ul li').eq(1).children().addClass('active');
		$('#leftmenu ul li').eq(1).siblings().children().removeClass('active');
	} else if ($(window).scrollTop() >= $('.contentxia .two').offset().top && $(window).scrollTop() < $(
			'.contentxia .three').offset().top) {
		$('#leftmenu ul li').eq(2).children().addClass('active');
		$('#leftmenu ul li').eq(2).siblings().children().removeClass('active');
	} else if ($(window).scrollTop() >= $('.contentxia .three').offset().top && $(window).scrollTop() < $(
			'.contentxia .four').offset().top) {
		$('#leftmenu ul li').eq(3).children().addClass('active');
		$('#leftmenu ul li').eq(3).siblings().children().removeClass('active');
	}else if ($(window).scrollTop() >= $('.contentxia .four').offset().top) {
		$('#leftmenu ul li').children().removeClass('active');
	}
})
//右侧固定，鼠标移入，li变蓝，并且左侧弹出以及左侧背景变蓝
$('.lf_fix2 li').mouseenter(function(){
	var a = $(this).index
	$(this).children().eq(1).css("display","block")
	$(this).children().eq(0).css("background-color","#3eb4fa")
})
$('.lf_fix2 li').mouseleave(function(){
	var a = $(this).index
	$(this).children().eq(1).css("display","none")
	$(this).children().eq(0).css("background-color","#918888")
})