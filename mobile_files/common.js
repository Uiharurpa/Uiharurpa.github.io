$(function(){
	$("#pagetop").click(function(){
		var targetOffset = $('#top').offset().top;
		$("html, body").animate({scrollTop:targetOffset}, 1000);
		return false;
	});
});