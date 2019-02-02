var buttonDown = document.querySelector('.button_down');

buttonDown.addEventListener('click', function (e) {
  e.preventDefault();
  
  var blockID = document.querySelector(buttonDown.getAttribute('href'));

  var topOfElement = blockID.offsetTop - 60;
  window.scroll({ top: topOfElement, behavior: "smooth" });
});