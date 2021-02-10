//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function (){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active',windowPosition)
})

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})










jQuery(document).ready(function() {

    jQuery(".owl-carousel").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay : true
    });

});