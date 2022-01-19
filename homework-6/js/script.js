/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как D;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', function () {
    // Благодаря таком обработчику событий наши скрипты начнут
    // выполняться только при создании и загрузки всего 
    // DOM-дерева старницы, то есть всех тегов и прочего

    'use strict';

    let ads = document.querySelectorAll('.promo__adv img');
    let genreOfFilm = document.querySelector('.promo__genre');
    let bg = document.querySelector('.promo__bg');
    let movieList = document.querySelector('.promo__interactive-list');
    let form = document.querySelector('form.add');
    let input = form.querySelector('.adding__input');
    let checkbox = form.querySelector('[type="checkbox"]');

  
    form.addEventListener('submit', function(e){
        e.preventDefault();

        let newFilm = input.value;
        let favMovie = checkbox.checked;

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();

       
    });


    bg.style.background = 'url(img/bg.jpg) center top/cover no-repeat';

    genreOfFilm.textContent = 'Драма';

    let deleteAd = (advertisement) => {
        advertisement.forEach(item => {
            item.remove();
        });
    };

    deleteAd(ads);

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Скотт Пилигрим против...",
            "Аврора",
            "Одержимость",
        ]
    };

    
    function createNewMovie(films, parent) {
        parent.innerHTML = '';
        films.forEach(function (movie, i) {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${movie}
                    <div class="delete"></div>
                </li>`;
        });
    }

    createNewMovie(movieDB.movies, movieList);
});