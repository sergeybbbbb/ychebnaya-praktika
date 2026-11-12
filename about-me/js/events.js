console.log('Обработчики событий подключены');

// Задача 1. Обработка нажатия
const helloBtn = document.querySelector('#hello-btn'); // кнопка до нажатия
const helloResult = document.querySelector('#hello-result'); // кнопка после нажатия

helloBtn.addEventListener('click', function () { // кнопка после клика
    helloResult.textContent = 'Кнопка нажата!'; // выводит сообщение после клика
});


// Задача 2. Счётчик
let count = 0;

const counter = document.querySelector('#counter'); // количество
const plusBtn = document.querySelector('#plus-btn'); // +
const minusBtn = document.querySelector('#minus-btn'); // - 
const resetBtn = document.querySelector('#reset-btn'); // сброс


plusBtn.addEventListener('click', function () { // функция , при нажатии на +1, количество меняется на + 1
    count = count + 1;
    counter.textContent = count;
});

minusBtn.addEventListener('click', function () { // функция , при нажатии на -1, количество меняется на - 1
    count = count - 1;
    counter.textContent = count;
});

resetBtn.addEventListener('click', function () { // функция, при нажатии которой на с, количество сбрасывается на 0
    count = 0;
    counter.textContent = count;
});

// Задача 3. Ввод имени
const nameInput = document.querySelector('#name-input'); // до ввода
const nameResult = document.querySelector('#name-result'); // после ввода

nameInput.addEventListener('input', function () {
    const userName = nameInput.value.trim(); // присваивается значение , которое вы введете

    if (userName === '') {
        nameResult.textContent = 'Введите ваше имя';
    } else {
        nameResult.textContent = `Привет, ${userName}! , Количество смволов ${userName.length}`; //вывод
    }
});

// Задача 4. Переключение оформления
const colorBox = document.querySelector('#color-box'); // прямоугольник
const colorBtn = document.querySelector('#color-btn'); // кнопка
const textA = document.querySelector('#text-a'); // кнопка
const vkl = document.querySelector('#vkl');

let isBlue = false;

colorBtn.addEventListener('click', function () {  // Если прямоугольник белый, то при клике на кнопку , она меняется
    if (isBlue === false) {
        colorBox.style.backgroundColor = 'lightblue';
        textA.style.colorBox = 'red';
        vkl.textContent = 'Цвет включен';
        isBlue = true;
    } else { // если еще раз нажать на кнопку, то прямоугольник меняется на цвет, который был изначально
        colorBox.style.backgroundColor = 'white';
        textA.style.colorBox = 'black';
        vkl.textContent = 'Цвет выключен';
        isBlue = false;
    }
});

// Задача 5. Проверка формы
const feedbackForm = document.querySelector('#feedback-form');

const feedbackName = document.querySelector('#feedback-name');

const formResult = document.querySelector('#form-result');

feedbackForm.addEventListener('submit', function (event) { // после нажатия кнопки 
    event.preventDefault();

    const userName = feedbackName.value.trim();

    if (userName === '') { // если пользователь ничего не вводит или вводит только пробелы , то пишет об ошибке
        formResult.textContent = 'Ошибка: введите имя';
        formResult.style.color = 'red';
    } else {
        formResult.textContent = `Спасибо, ${userName}! Данные проверены.`;
        formResult.style.color = 'green';
    }
});







