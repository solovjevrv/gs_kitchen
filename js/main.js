$(document).ready(function(){
  $(".mobile_nav").click(function(){
    $(this).toggleClass("mobile_nav_active");
    $(".desktop_nav").fadeToggle(500);
  });
});