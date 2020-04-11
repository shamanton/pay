
var swiper = new Swiper('.CLASS', {
    slidesPerView: 7,
    spaceBetween: 0,
    speed: 3000,
    disableOnInteraction: false,
    loop: true,
    autoplay: {
        delay: 0
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger_menu').slideToggle('slow');
});
