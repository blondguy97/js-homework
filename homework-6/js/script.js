/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как D;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм" */


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
    
        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Скотт Пилигрим против...",
                "Аврора",
                "Одержимость",
            ]
        };
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let newFilm = input.value.trim();
        let favMovie = checkbox.checked;
        
        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = newFilm.substring(0,22) + '...';
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies); 
            createNewMovie(movieDB.movies, movieList);
        }
        if(favMovie) {
            console.log("Сделать любимым");
        }
    });

    let sortArr = (arr) => {
        arr.sort();
    };
    
    let changeContent = () => {
        bg.style.background = 'url(img/bg.jpg) center top/cover no-repeat';
        genreOfFilm.textContent = 'Драма';
    };

    changeContent();


    let deleteAd = (advertisement) => {
        advertisement.forEach(item => {
            item.remove();
        });
    };

    deleteAd(ads);

    
    function createNewMovie(films, parent) {
        parent.innerHTML = '';
        films.forEach(function (movie, i) {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${movie}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
            });
        }); 
    }
    createNewMovie(movieDB.movies, movieList);
    
});


