window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("glow").style.fontSize = "30px";
    document.getElementById("glow").style.backgroundColor = "#db382c"
    document.getElementById("menu-b").style.transform = "translate(-20px, -5px)"
    document.getElementById("menu-b").style.width = "35px"
    document.getElementById("menu-b").style.height = "35px"
    document.getElementById("glow").style.borderRadius = "0px";
    document.getElementById("glow").style.top = "-45px";
    document.getElementById("glow").style.height = "25px";
 }else {
    document.getElementById("glow").style.fontSize = "120px";
    document.getElementById("glow").style.backgroundColor = "#c978dd"
    document.getElementById("menu-b").style.transform = "translate(-10px, 0px)"
    document.getElementById("glow").style.borderRadius = "15px";
    document.getElementById("menu-b").style.width = "40px"
    document.getElementById("glow").style.height = "150px";
    document.getElementById("glow").style.top = "-95px";
    document.getElementById("menu-b").style.height = "40px"}
 }
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
})

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active')
})