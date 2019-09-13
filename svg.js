$( document ).ready(function() {
    var ww = $(window).width();
	var svgw = $("#building-map").width();
	$('#building-map').css('left', (ww - svgw)/2);
});


$(".building-floors, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});
$(".building-floors, circle").mouseleave(function(e) {
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


$( ".building-floors" ).on('click touchstart', function ()  {
	var fl = $(this).attr("fl-num")
  openGallery(parseInt(fl));
  console.log(parseInt(fl));
});
