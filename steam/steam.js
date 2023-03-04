window.onscroll = function() {scrollFunction()};
document.getElementById("menu-b").style.width = "40px"
document.getElementById("menu-b").style.height = "40px"
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("glow").style.fontSize = "30px";
    document.getElementById("glow").style.backgroundColor = "#e8b923"
    document.getElementById("menu-b").style.transform = "translate(-20px, -5px)"
    document.getElementById("menu-b").style.width = "35px"
    document.getElementById("menu-b").style.height = "35px"
    document.getElementById("glow").style.borderRadius = "0px";
    document.getElementById("glow").style.top = "-45px";
    document.getElementById("glow").style.height = "25px";
 }else {
    document.getElementById("glow").style.fontSize = "120px";
    document.getElementById("glow").style.backgroundColor = "#789cdd"
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

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
