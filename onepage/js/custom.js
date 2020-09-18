
var swiper1 = new Swiper('.slider-slide', {
	onSlideChangeEnd: function (swiper) {
    $('.slider-slide .swiper-slide').each(function () {
	        if ($(this).index() === swiper.activeIndex) {
	            $(this).find('.content').fadeIn(300);
	        }
	        else {
	            $(this).find('.content').fadeOut(300);   
	        }
    	});
    },
	nextButton: '.buttons .next',
	prevButton: '.buttons .prev',
	slidesPerView:1,
	loop:true,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView: 1
		},
		720: {
			slidesPerView:1
		},
		570: {
			slidesPerView:1
		},
		480: {
			slidesPerView:1
		},
	}
});


var swiper2 = new Swiper('.ourhappy-slide', {
	nextButton: '.ourhappybuttons .next',
	prevButton: '.ourhappybuttons .prev',
	slidesPerView:1,
	loop:true,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView: 1
		},
		720: {
			slidesPerView:1
		},
		570: {
			slidesPerView:1
		},
		480: {
			slidesPerView:1
		},
	}
});


var swiper3 = new Swiper('.team-slide', {
	slidesPerView:4,
	pagination: '.team-pagination',
	paginationClickable: true,
	loop:false,
	spaceBetween:15,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		720: {
			slidesPerView:2
		},
		570: {
			slidesPerView:1
		},
		480: {
			slidesPerView:1
		},
	}
});
 
var swiper4 = new Swiper('.references-slide', {
	slidesPerView:4,
	pagination: '.pagination',
	paginationClickable: true,
	loop:false,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView: 4
		},
		720: {
			slidesPerView:2
		},
		570: {
			slidesPerView:1
		},
		480: {
			slidesPerView:1
		},
	}
});


$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

var lastId,
	topMenu = $("#header"),
	topMenuHeight = topMenu.outerHeight()+15,
	menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) { return item; }
});

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});


$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   } 

	var number = 75;
	var pos = $(window).scrollTop();
	var header = $("header");
	if (pos > number ) 
		header.addClass('active');
	else
	{
		header.removeClass('active');
	}
});


jQuery(document).ready(function ($) {
	$('.hamburgermenu').click(function(){
		$('.mainmenu').slideToggle();
	});

	$('.mainmenu ul li a').bind('click', function(event) {
        var $This = $(this);
        var $MainLi = $('.mainmenu ul li');
        if (screen.width < 767) {
        	var $Mainmenu = $('.mainmenu');
        	$($MainLi).removeClass('active');
        	 $Mainmenu.slideToggle();
        }
       
        $($This).closest('li').addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($This.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$(function() {
	  $("form[name='contact']").validate({
	    rules: {
	      Name: "required",
	      Email: "required",
	      Subject: "required",
	      Message: "required"
	    },
	    messages: {
	      Name: "Please enter your Name",
	      Email: "Please enter a valid Email Address",
	      Subject: "Please enter your Subject",
	      Message: "Please enter your Message"
	    },
	    submitHandler: function(form) {
	      form.submit();
	    }
	  });
	  $("form[name='comments']").validate({
	  	rules: {
	  		Name:"required",
	  		Email:"required",
	  		Message:"required"
	  	},
	  	messages: {
	  		Name:"Please enter your Name",
	  		Email:"Please enter a valid Emmail Address",
	  		Message: "Please enter your Message"
	  	},
	  	submitHandler:function(form){
	  		form.submit();
	  	}
	  });
	});
});

Counter()
function Counter() {
  runCounter()
  function runCounter() {
      var runned = false
    count()
    $(window).scroll(count)
    function count() {
      var isInView = inView(document.querySelector('[data-counter-container]'))
      if(isInView && !runned) {
      runned = true
        $('[data-counter]').each(function(_, counter) {
        var $counter = $(counter)
        var from = parseFloat($counter.data('from'))
        var to = parseFloat($counter.data('to'))
        var speed = parseFloat($counter.data('speed'))
        var offset = parseFloat($counter.data('offset'))
        var actualValue = parseFloat($counter.text())

          var interval = setInterval(updateValue, speed)

          var value = from

          function updateValue() {
            value += offset

            $counter.text(value)

            if(value >= to) {
              $counter.text(to)
              clearInterval(interval)      
            }        
          }    
      })   
      }
    }
  }
  
  function inView(element) {
    var rect = element.getBoundingClientRect()
    var html = document.documentElement
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    )
  }
  
}
