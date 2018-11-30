var swiper1 = new Swiper('.description_slide', {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: '.swiper-pagination',
    autoplay: '4000',
    loop: 'true',
    onlyExternal:true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  })
var swiper2 = new Swiper('.s2', {
    loop: true,
    onlyExternal:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: '4000',
    loop: 'true',
    effect: 'fade',
 });