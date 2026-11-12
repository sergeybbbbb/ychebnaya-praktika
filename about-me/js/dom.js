console.log('DOM подключён');

// Задача 1. Изменение текста
const mainTitle = document.querySelector('#main-title'); // присваивает значение <h1 id="main-title">Изучаем JavaScript DOM</h1>
mainTitle.textContent = 'Моя первая работа с DOM'; //меняет заголовок на Моя первая работа с DOM'

const message = document.querySelector('#message'); // через #message присваивает значение const message
message.textContent = 'Теперь я умею менять содержимое страницы!'; // меняет текст на Теперь я умею менять содержимое страницы!

console.log(mainTitle.textContent);

// Задача 2. Электронная визитка
const studentName = 'Иван Иванов';
const studentGroup = 'ИС-1-25';

document.querySelector('#student-name').textContent = `Студент: ${studentName}`; // через #student-name присваивает значение const studentName

document.querySelector('#student-group').textContent = `Группа: ${studentGroup}`; // через #student-group присваивает значение const studentGroup

// Задача 3. Изменение стилей
const productCard = document.querySelector('#product-card');

productCard.style.backgroundColor = '#e8f4ff';
productCard.style.padding = '20px';
productCard.style.border = '2px solid blue';
productCard.style.borderRadius = '10px';

const productPrice = document.querySelector('#product-price');

productPrice.style.color = 'green';
productPrice.style.fontWeight = 'bold';

// Задача 4. Работа со списком
const items = document.querySelectorAll('#subjects li');

console.log('Количество предметов:', items.length); // выводит количество предметов списка

for (const item of items) {
  item.style.color = 'darkblue'; 
  item.style.fontSize = '20px';
}

// Задача 5. Управление классами
const statusText = document.querySelector('#status');

statusText.classList.add('success'); // означает выполнено, warning не выполнено
statusText.textContent = 'Статус: выполнено';



