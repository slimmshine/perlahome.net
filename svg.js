$( document ).ready(function() {
    var ww = $(window).width();
	var svgw = $("#building-map").width();
	$('#building-map').css('left', (ww - svgw)/2);
});


$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});
$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
$(document).mousemove(function(e) {
	 var x = $("#building-map").position();
	/*
	console.log(" Section Top: " + x.top + " Section Left: " + x.left);
	console.log(" Top: " + e.pageY + "  Left: " + e.pageX);
	*/
  $('#info-box').css('top',e.pageY-x.top+30);
  $('#info-box').css('left',e.pageX - ($('#info-box').width())/2);
}).mouseover();


$( "path" ).on('click touchstart', function ()  {
  window.open("./wp-content/uploads/2019/09/-1.jpg", '_self');
});
