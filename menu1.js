$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(400);
  });
  $(window).resize(function(){
    if($(window).width()>400){
      $('nav ul').removeAttri('style');
    }
  });
});
