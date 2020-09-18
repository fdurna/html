
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


var swiper2 = new Swiper('.overview_Slide', {
	slidesPerView:16,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView:10
		},
		720: {
			slidesPerView:8
		},
		570: {
			slidesPerView:5
		},
		480: {
			slidesPerView:4
		},
	}
});


var swiper3 = new Swiper('.team_Slide', {
	nextButton: '.teams_List .button_Left',
	prevButton: '.teams_List .button_Right',
	slidesPerView:12,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView:10
		},
		720: {
			slidesPerView:8
		},
		570: {
			slidesPerView:5
		},
		480: {
			slidesPerView:2
		},
	}
});
 
var swiper4 = new Swiper('.featured_Slide', {
	slidesPerView:3,
	loop:false,
	spaceBetween:0,
	autoplay: 5000,
	breakpoints: {
		992: {
			slidesPerView:3
		},
		720: {
			slidesPerView:3
		},
		570: {
			slidesPerView:2
		},
		480: {
			slidesPerView:2
		},
	}
});


jQuery(document).ready(function ($) {

	$('input[type=range]').on('input', function(e){
	  var min = e.target.min,
	      max = e.target.max,
	      val = e.target.value;
	  
	  $(e.target).css({
	    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
	  });
	}).trigger('input');

	$('.hamburgermenu').click(function(){
		$('.mainmenu').slideToggle();
	});

	$('#eventLeftPanelClick').click(function(){
		$('.eventLeftPanel').toggleClass('active');
	});

	$('#side_Menuopen').click(function(){
		$('main').toggleClass('active');
		$('.mobil_Sidemenu').toggleClass('active');
	});

	$('.matchlist .item').click(function(){
		$(this).toggleClass('active');
	});

	$('.score_One').click(function(){
		$(this).toggleClass('active_Table');
	});

	$('.table_Click').click(function(){
		$(this).toggleClass('active_Table');
	});


	$('#modalActiveLog').click(function(){
		$('.bet_slip').addClass('active');
	});
	$('#modalPassiveLog').click(function(){
		$('.bet_slip').removeClass('active');
	})

	$('li.li_toggle a').click(function(){
		$(this).parent().children(".slide_toggle").slideToggle(200); 
	});

	/*
	$('.groupitem .grouptit').click(function(){
		$(this).parent().children(".groupinfo").slideToggle(500); 
	});

	$('.groupinfotit').click(function(){
		$(this).parent().children(".groupinfolist").slideToggle(500);
	});
	*/


	$('a.rightActiveClick').click(function(){
		$('.rightpanel').toggleClass('active');
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

