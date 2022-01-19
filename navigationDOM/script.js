'use strict';

console.log(document.documentElement);

//  Таким образом мы получаем всю HTML разметку

console.log(document.body.childNodes);
// Таким образом мы получаем все Ноды(узлы) на странице

console.log(document.body.firstChild);
console.log(document.body.lastChild);
// Таким образом мы получаем первый и последний НОДЫ(узлы) на странице


// Но тут мы отталкивались только от родителей, но можно отталкиваться
// и от абсолютно любого элемента на странице


console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);
// Таким образом мы выбираем нужный элемент на странице и с помощью 
// parentNode мы идем вверх по родителям, также мы можем продублировать и поставить еще один 
// parentNode и тогда мы пойдем еще выше по DOM дереву

let dat = document.querySelector('[data-current="3"]');
// Также мы можем путешествовать по DOM дереву используя data атрибуты
// они ставятся у элементов как обычные атрибутыи
// все начинаются со слова data-*тут любое наше слово подходящее по смыслу*


console.log(document.querySelector('.third').nextSibling); 
// Таким образом мы выбираем следующую ТЕКСТОВУЮ НОДУ

console.log(document.querySelector('.third').previousSibling); 
// Таким образом мы выбираем предыдущую ТЕКСТОВУЮ НОДУ



console.log(document.querySelector('.third').nextElementSibling);
console.log(document.querySelector('.third').previousElementSibling);
// Почти все что я перечислил вызывает именно НОДЫ(узлы, это могут быть и переносы строк и прочее)
// Но есть методы которые вызывают конкретно элементы, например nextElementSibling и previousElementSibling

console.log(document.querySelector('.third').parentElement);
// Таким образом мы выбираем родительский ЭЛЕМЕНТ, а не ноду

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
// Таким образом мы выбираем первые и последние ЭЛЕМЕНТЫ у выбранного тега или класса, а не ноды

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
// Таким циклом по псевдоколлекции нод в каком-то определенном теге или классе 
// мы можем отсеять все ноды и оставить только элементы 