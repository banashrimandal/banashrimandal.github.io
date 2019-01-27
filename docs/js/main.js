$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})


$(function() {
	var selectedClass = "";
	$(".filter").click(function(){
	selectedClass = $(this).attr("data-rel");
	$("#gallery").fadeTo(100, 0.1);
	$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
	setTimeout(function() {
	$("."+selectedClass).fadeIn().addClass('animation');
	$("#gallery").fadeTo(300, 1);
	}, 300);
	});
});