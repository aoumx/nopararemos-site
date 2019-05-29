$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggle();
  })

  $('.circle').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.png)");
    $('body').css("background-size", 2000 + "px " + 1125 + "px");
  })


});
