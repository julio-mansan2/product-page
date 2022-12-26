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

for (let e = 0; e < inputRadio.length; e++) {
    inputRadio[e].addEventListener('click', function () {
        if (inputRadio[e].checked === true) {
            modalOptions[e].classList.add('border-check')
            modalOptions[e].classList.remove('normal-border')
        } else if (inputRadio[e].checked === false / modalOptions[e].classList.contains('border-check')) {
            modalOptions[e].classList.remove('border-check')
            modalOptions[e].classList.add('normal-border')
        }
    } )
}

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


