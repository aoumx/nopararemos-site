$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggleClass();
  })

  $('.textura-1').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-033.png");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-2').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-055.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-3').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-022.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-4').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-044.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-5').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-011.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.textura-6').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-066.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.menu-principal').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-011.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })




});
