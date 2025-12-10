const overlay = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal-close')
const card = document.querySelector('.main-card-cards')
card.addEventListener('click', function(){
    overlay.classList.add('show-modal')
})
modalClose.addEventListener('click', function(){
    overlay.classList.remove('show-modal')
})