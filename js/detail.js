$('.tophead .topheadmain .headrig li:nth-of-type(1)').hover(function() {
	$('.tophead .topheadmain .headrig .downcar').css("display","block")
}, function() {
	$('.tophead .topheadmain .headrig .downcar').css("display","none")
})
$('.tophead .topheadmain .headrig li:nth-of-type(3)').hover(function() {
	$('.tophead .topheadmain .headrig .phoneying').css("display","block")
}, function() {
	$('.tophead .topheadmain .headrig .phoneying').css("display","none")
})
// .rightdeta .detatab ul li
$('.rightdeta .detatab ul li').click(function(){
	$(this).addClass("current")
	$(this).siblings().removeClass("current")
})
