const close = document.getElementById('close');
const klose = document.getElementById('klose');

const open = document.getElementById('pullUp');
const ope = document.getElementById('popUp');

const modal = document.getElementById('modal');
const model = document.getElementById('model');

const faq = document.querySelectorAll('.faq');
const play = document.getElementById('play');
const bg = document.getElementById('bg');

let navbar = document.querySelector('.header .navbar');
let accountInfo = document.querySelector('.account-info');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
ope.addEventListener('click', () => model.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
klose.addEventListener('click', () => model.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

window.addEventListener('click', e =>
  e.target == model ? model.classList.remove('show-modal') : false
);

// OPEN (FAQ)
faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

// PLAY
play.onclick = function(){
    bg.style.display = 'block';
  
    if(bg.paused){
        bg.play();
        play.src = 'image/pause.png';
    }
    
    else{
        bg.pause();
        play.src = 'image/play.png';
    }
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
    accountInfo.classList.add('active');
}

document.querySelector('#close-account-info').onclick = () =>{
    accountInfo.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    accountInfo.classList.remove('active');
}



var swiper = new Swiper(".showcase-slider", {
    loop:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function(){
    $(".event-slider").slick({
        Infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500
    });
});