import './scss/app.scss';

console.log('JS Connected');

let slidePosition = 0;
const $slides = document.querySelectorAll('.slider-item');
const totalSlides = $slides.length;

const $prev_btn = document.querySelector('#prev_btn');
const $next_btn = document.querySelector('#next_btn');

//burger menu btn for low resolution
const $menu_btn = document.querySelector('#menu_btn');

// events
$prev_btn.addEventListener('click', () => moveToPrevSlide());
$next_btn.addEventListener('click', () => moveToNextSlide());

$menu_btn.addEventListener('click', () => showLowResolutionMenu());

// showing and hiding menu after click the button
const showLowResolutionMenu = () => {
    let $low_resolution_menu = document.querySelector('#low-resolution-menu');
    if($low_resolution_menu.classList.contains('show')) {
        $low_resolution_menu.classList.remove('show');
    } else {
        $low_resolution_menu.classList.add('show');
    }
}

//updating slide position number after click button next or prev
const updateSlidePosition = () => {
    for(let slide of $slides) {
        slide.classList.remove('visible')
    }

    $slides[slidePosition].classList.add('visible');
} 

// move to prev slide
const moveToPrevSlide = () => {
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

// move to next slide
const moveToNextSlide = () => {
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}