$(document).ready(() => {
  $('.submenu-click').on('click', () => {
    $('.menu-button').toggle();
  })

  $('.circle').on('click', () => {
    $('body').css("background-color", "red");
  })


});
