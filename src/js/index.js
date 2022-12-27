const bookmarkButton = document.getElementById('bookmark-btn')
const imgBookmark = document.querySelector('.img-btn')
const bookmark = document.querySelector('.bookmark')
const bookmarked = document.querySelector('.bookmarked')
const backButton = document.getElementById('back')
const rewardButton = document.querySelectorAll('.reward')
const thanksPage = document.getElementById('thanks')
const modalPage = document.getElementById('modal')
const closeButton = document.querySelector('.close')
const inputRadio = document.querySelectorAll('.radio')
const modalOptions = document.querySelectorAll('.modal-options')
const inputSubmit = document.querySelectorAll('.input-submit')
const gotItButton = document.getElementById('got-it')

bookmarkButton.addEventListener('click', function () {
    bookmark.classList.toggle('ocultar')
    bookmarked.classList.toggle('ocultar')
    bookmarked.classList.toggle('selecionado')
    imgBookmark.classList.toggle('active-bookmark')
})

backButton.addEventListener('click', function () {
    modalPage.classList.remove('ocultar')
    modalPage.classList.add('selecionado')
})

closeButton.addEventListener('click', function () {
    modalPage.classList.remove('selecionado')
    modalPage.classList.add('ocultar')
})

for (let i = 0; i < rewardButton.length; i++) {
    rewardButton[i].addEventListener('click', function () {
        modalPage.classList.remove('ocultar')
        modalPage.classList.add('selecionado')
    })
}

inputRadio[0].addEventListener('click', function () {
    modalOptions[0].classList.add('border-check')
    modalOptions[0].classList.remove('normal-border')
    modalOptions[1].classList.remove('border-check')
    modalOptions[1].classList.add('normal-border')
    modalOptions[2].classList.remove('border-check')
    modalOptions[2].classList.add('normal-border')
})

inputRadio[1].addEventListener('click', function () {
    modalOptions[0].classList.remove('border-check')
    modalOptions[0].classList.add('normal-border')
    modalOptions[1].classList.add('border-check')
    modalOptions[1].classList.remove('normal-border')
    modalOptions[2].classList.remove('border-check')
    modalOptions[2].classList.add('normal-border')
})

inputRadio[2].addEventListener('click', function () {
    modalOptions[0].classList.remove('border-check')
    modalOptions[0].classList.add('normal-border')
    modalOptions[1].classList.remove('border-check')
    modalOptions[1].classList.add('normal-border')
    modalOptions[2].classList.add('border-check')
    modalOptions[2].classList.remove('normal-border')
})

for (let e = 0; e < inputSubmit.length; e++) {
    inputSubmit[e].addEventListener('click', function () {
        event.preventDefault();
        modalPage.classList.remove('selecionado')
        modalPage.classList.add('ocultar')
        thanksPage.classList.add('selecionado')
        thanksPage.classList.remove('ocultar')
    })
}

gotItButton.addEventListener('click', function () {
    thanksPage.classList.remove('selecionado')
    thanksPage.classList.add('ocultar')
})

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.getElementById('menu_box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
    }
})


