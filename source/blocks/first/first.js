var buttonDown = document.querySelector('.button_down');

buttonDown.addEventListener('click', function (e) {
  e.preventDefault();
  
  var blockID = buttonDown.getAttribute('href');
  
  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});