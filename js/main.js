$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggleClass();
  })

  $('.textura-1').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-03.png");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-2').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-05.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-3').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-02.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-4').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-04.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-5').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-011.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-6').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-06.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.menu-principal').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })




});
