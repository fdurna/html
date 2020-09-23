
var app = {
    SectionScroll:$('.js-section-scroll'),
    SectionButton:$('section.buttons ul li'),
	init:function(){
        app.SectionScroll.on('click',app.SectionScrollRun),
        app.SectionButton.hover(app.SectionButtonRun,app.SectionButtonRun2)
	},
    SectionScrollRun:function(e){
        e.preventDefault();
        var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
        var $section = $(section);
        $('html,body').animate({
            scrollTop: $section.offset().top + 'px'
        },700);
    },
    SectionButtonRun:function(){
        $(this).find('span.text').show();
    },
    SectionButtonRun2:function(){
        $(this).find('span.text').hide();
    } 
}

app.init();


var scene = document.getElementById('scene');

var parallax = new Parallax(scene);




$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['anasayfa', 'hakkımızda','hizmetler','section4',],
      showActiveTooltip: true,
      slidesNavigation: true,
        slidesNavPosition: 'bottom',
      controlArrows:false,
    });
});