$('.slick01').slick({
	autoplay: true,
	infinite: true,
	fade: true,
});

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(document).ready( function () {
    $('#myTable').DataTable({
      lengthChange: false,
      info: false,
      paging: false,
      scrollY: true
    });
} );