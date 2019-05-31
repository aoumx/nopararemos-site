$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggleClass();
  })

  $('.uno').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-03.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.dos').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-02.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.tres').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-02.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.cuatro').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-04.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.cinco').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })
  $('.seis').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-02.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })


});
