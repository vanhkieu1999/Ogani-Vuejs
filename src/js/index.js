// $('.slideCate').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: true,
//   speed: 1000,
//   prevArrow: $('.swiper-button-next'),
//   nextArrow: $('.swiper-button-prev'),
// });
import Swiper from 'swiper/bundle';


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   // autoplay: {
//   //   delay: 1000,
//   //   disableOnInteraction: false,
//   // },
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

$('.latestPrdouct').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  rows: 3,
  prevArrow: $('.latestPrdouct-owl-next'),
  nextArrow: $('.latestPrdouct-owl-prev'),
});

$('.TopRateProduct').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  rows: 3,
  prevArrow: $('.TopRateProduct-owl-next'),
  nextArrow: $('.TopRateProduct-owl-prev'),
});

$('.ReviewProduct').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  rows: 3,
  prevArrow: $('.ReviewProduct-owl-next'),
  nextArrow: $('.ReviewProduct-owl-prev'),
});
