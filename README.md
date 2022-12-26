# Desafio Product Page - Frontend-Mentor

Este é um desafio de Página de Produto proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile
````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/product-page">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Aplicar um box-shadow que escureça toda a tela atrás de um determinado elemento:

````css

.element {
    box-shadow: 0.6rem 0.6rem 0.4rem 125rem rgba(0,0,0,0.75);
}

````

- Empilhar seções, ocultando-as:

````css

#element1,
#element2 {
    position: absolute;
    margin: auto;
    top: 0%;
    left: 0;
    right: 0;
}

.ocultar {
    z-index: -2;
    opacity: 0;
    display: none;
}

````

- Transitar as seções de um formulário:

````javascript

const rewardButton = document.querySelectorAll('.reward')
const thanksPage = document.getElementById('thanks')
const modalPage = document.getElementById('modal')

backButton.addEventListener('click', function () {
    modalPage.classList.remove('ocultar')
    modalPage.classList.add('selecionado')
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

````

<br>

### Possíveis evoluções

<br>

- Códigos mais compactos;
- Posicionar melhor os elementos em "absolute";
- Entender acerca da remoção de classes para elementos em JS.

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>