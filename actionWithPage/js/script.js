'use strict';

let box = document.querySelector('#box');
let btn = document.querySelectorAll('button');
let hearts = document.querySelectorAll('.heart');
let circles = document.querySelectorAll('.circle');

let div = document.createElement('div');
let div2 = document.createElement('div');

div.classList.add('black');
div2.classList.add('blue');
    
div2.innerHTML = '<h2>hello</h2>'; // сюда можно писать целый html, то есть теги, текст, ссылки и все остальное что есть в html
div.textContent = 'hello'; // можно писать только текст

let wrapper = document.querySelector('.wrapper');

wrapper.insertBefore(div2, hearts[1]); // устар. Обращение через родителя

hearts[0].before(div2); // соврем. Стандарт
hearts[0].after(div);

hearts[2].replaceWith(circles[1]);

box.remove(); // соврем. Стандарт
wrapper.removeChild(hearts[1]); // устар. Обращение через родителя

div.insertAdjacentHTML('afterend',' <h2>i am a h2 title</h2>');  
// Вставка html-кода перед или после и прямо В указанный тег(смотреть первый аргумент, там 4 варианта)