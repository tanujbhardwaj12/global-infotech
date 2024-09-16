
$(document).ready(function(){
    $('.your-slider').slick({
        dots: true,          // Show dots for navigation
        infinite: true,      // Infinite loop sliding
        speed: 300,          // Transition speed
        slidesToShow: 3,     // Number of slides to show at once
        slidesToScroll: 1,   // Number of slides to scroll at a time
        arrows: true,        // Show arrows for navigation
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 2000  // Autoplay speed in milliseconds
    });
});


let element;

element = document.getElementById("icon-javascript").addEventListener("click",abc);

function abc(){
  document.getElementById("icon-javascript").classList.toggle("xyz");
  let a = document.getElementById("icon-javascript").classList;
  console.log(a);
  
}