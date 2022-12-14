let menuBtn = document.querySelector('.hamburger');
let menuList  = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    menuList.classList.toggle('open');
});
