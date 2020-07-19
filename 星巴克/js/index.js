$(function () {

  $('.menu-btn').on('click', function () {
    $('.child-menu').fadeIn(300);
  })

  $('.menu-close').on('click', function () {
    $('.child-menu').fadeOut(300);
  })

  $('.more').on('click', function () {
    $('.child-menu').fadeIn(300);
  })

})