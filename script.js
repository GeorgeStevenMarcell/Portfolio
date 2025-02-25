let carousel = document.querySelector('.carousel');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let item = document.querySelector('.project');

function leftClick() {
    console.log("test");
    carousel.scrollLeft -= item.clientWidth;
}

function rightClick() {
    console.log("test");
    carousel.scrollLeft += item.clientWidth;
}