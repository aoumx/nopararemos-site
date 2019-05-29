$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggle();
  })

  $('.circle').on('click', () => {
    $('body').css("background-image", "url(textures/texturas_-01.png)");
  })


});
