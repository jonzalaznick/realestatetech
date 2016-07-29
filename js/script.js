var main = function() {
  	

	$('#menu').hover(function() {
		$('#menu .dropdown-menu').toggle();
	});
	
    
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
    
    
};





$(document).ready(main);






/*

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});




$('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000);
          return false;
        }
      }
    });
  });
	



};



*/

/*

$('.sidebar ul li').click(function() {
    var category = $(this).attr('class');

    $('.sidebar ul li').removeClass('active');
    $(this).addClass('active');

    if(category === 'armando-3') {
       $('#armando-2').removeClass('selected');
       $('#armando-1').removeClass('selected');
    		$("armando-3").addClass('selected');

		}
    else if(category === 'armando-2') {
    	$('#armando-3').removeClass('selected');
    	$('#armando-1').removeClass('selected');
    		$("armando-2").addClass('selected');

		}
    else if(category === 'armando-1') {
    	$('#armando-2').removeClass('selected');
       	$('#armando-3').removeClass('selected');
    		$("armando-1").addClass('selected');

		}
  });
    

 };



*/

