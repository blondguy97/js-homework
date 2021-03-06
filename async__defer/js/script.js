
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Тут я расскажу о двух атрибутах в теге подключения js-скриптов
    // <script defer src="script.js"></script>, они нужны чтобы скрипты загружались 
    // когда этого потребуется, то есть НЕ РАНЬШЕ чем основная верстка на странице
    // иначе скрипты просто не будут работать
    
    // 1) defer - этот атрибут сообщает браузеру что он должен продолжать
    // обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить
    // скрипт когда он загрузится окончательно
    // Пару особенностей defer - 
    //     --Подключение скриптов атрибутом defer никогда не блокирует страницу, 
    //     даже если поставить подключение скриптов в начале страницы
    //     --Скрипты с таким атрибутом всегда выполняются когда наше
    //     DOM-дерево уже готово. То есть когда вся верстка уже сформируется
    //     --Скрипты с defer выполняются относительно друг друга, то есть последовательно,
    //     как элементы в верстке то есть друг за другом, 
    //     даже если второй следующий после первого легче по содержанию

    // Выглядит скрипт полностью так: <script defer src="script.js"></script>

    // 2) async - этот атрибут в отличии от предыдущего никого не ждет,
    // то есть он загружается когда до него дойдет страница, он загружается 
    // в фоновом режиме также как и defer, но при этом он запускается как только он 
    // был загружен. Остальные подключенные скрипты не ждут скрипты с async, и скрипты
    // с async не ждут остальные скрипты, они становятся абсолютно независимыми
    // скрипты с атрибутом async нужны в основном при подключении различных метрик
    // когда они не подвязаны ни под вертску, ни под остальные скрипты
    // Так что если ставить атрибут asyns, то надо быть уверенным что 
    // он не подвязан под вертску и он не должен быть зависимым от других скриптов 

    // Также у нас есть возможность поместить подключение скрипта ДИНАМИЧЕСКИ, то есть через js

    const script = document.createElement('script');
    script.src = 'js/test.js';

    document.body.append(script);

    // По умолчанию динамически подключенные скрипты ведут себя 
    // как будто у них атрибут async
    // Чтобы отключить это поведение необходимо сделать так

    script.async = 'false';

});
