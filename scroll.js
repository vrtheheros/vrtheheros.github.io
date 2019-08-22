$(document).ready(function(){
   $('.js--scroll-to-owners').click(function (){
       $('html , body').animate({scrollTop: $('.js--section-owners').offset().top}, 1000);
   });
    
    $('.js--scroll-to-courses').click(function (){
       $('html , body').animate({scrollTop: $('.js--section-courses').offset().top}, 1000);
   });
    
    $('.js--scroll-to-results').click(function (){
       $('html , body').animate({scrollTop: $('.js--section-results').offset().top}, 1000);
   });
    
    $('.js--scroll-to-about').click(function (){
       $('html , body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
   });
    
    $('.js--scroll-to-notice').click(function (){
       $('html , body').animate({scrollTop: $('.js--section-notice').offset().top}, 1000);
   });
    
    $(document).ready(function() {
              var dd = $('.vticker').easyTicker({
                direction: 'up',
                easing: 'easeInOutBack',
                speed: 'slow',
                interval: 2000,
                height: 'auto',
                visible: 10,
                mousePause: 0,
              }).data('easyTicker');
            });
});