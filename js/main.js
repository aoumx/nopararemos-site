$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggleClass();
  })

  $('.textura-1').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-03.jpg");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-2').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-05.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-3').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-02.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-4').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-04.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-5').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-6').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-06.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.menu-principal').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.jpg)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })




});
