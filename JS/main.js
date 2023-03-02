// Modal
var iconList = document.querySelector('.js-icon');
var Modal = document.querySelector('.js-modal');
var iconClose = document.querySelector('.js-icon-close');

showModal = function () {
    Modal.classList.add('open')    
}
closeModal = function () {
    Modal.classList.remove('open')    
}

iconList.addEventListener('click',showModal)
iconClose.addEventListener('click',closeModal)
Modal.addEventListener('click',closeModal)

ScrollReveal().reveal('.js-composition');

//btn-up
const btnUp = document.querySelector('.js-btn-up');
upweb = function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  });
}
btnUp.addEventListener('click',upweb);
