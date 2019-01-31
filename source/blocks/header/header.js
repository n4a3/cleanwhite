var header = document.querySelector('.header');

window.onscroll = function() {
  if (window.pageYOffset > 102) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
};