// Selecting Elements by Their Id
let stars = document.getElementById('stars');
let mountains_farest = document.getElementById('5');
let mountains_behind = document.getElementById('4');
let mountains_front = document.getElementById('3');
let cave_behind = document.getElementById('2');
let cave_floor = document.getElementById('1');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {

    // Scroll Effect with JavaScript
    let value = window.scrollY;

    // Stars
    stars.style.left = value * 0.25 + 'px';

    // Mountains
    mountains_farest.style.top = value * 0.8 + 'px';
    mountains_behind.style.top = value * 0.6 + 'px';
    mountains_front.style.top = value * 0.4 + 'px';

    // Cave
    cave_behind.style.top = value * 0.4 + 'px';
    cave_floor.style.top = value * 0.3 + 'px';

    // Text
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';

    // Button
    btn.style.marginTop = value * 1.2 + 'px';

    // Header
    header.style.top = value * 0.5 + 'px';

})
