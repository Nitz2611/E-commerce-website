
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


// js for hamburger sidebar menu --> START
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// --> END


//js for single product detail page to slide through images of product --> START

var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}
// --> END

// Wanted to add some backend in this. Coming soon
