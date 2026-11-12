function greet(name) {
  return `Привет, ${name}!`;
}

console.log(greet('Миша'));
console.log(greet('Маша'));

function test() {
  const inside = 'внутри';
  console.log(inside);
}
test();
// console.log(inside);

// Задача 10. Стрелочные функции
const square = (x) => x * x;
const celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
const addNumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiusToFahrenheit(20));
console.log(addNumbers(2, 3));

// Задача 11. Массивы
const subjects = ['Математика', 'Информатика', 'Физика'];
console.log(subjects.length); // количество предметов
console.log(subjects[0]); // предмет с индексом 0 = Математика
console.log(subjects[subjects.length - 1]);

subjects.push('История'); // добавляет элемент в конец массива
console.log(subjects);
const removed = subjects.pop(); // .pop удаляеn последний элемент 
console.log('Удалили:', removed);

for (const subject of subjects) {
  console.log('Предмет: ' + subject);
}
// Задача 11. Массивы
// const grades = [5, 4, 3, 5, 4];
// function getAverage(list) {
// let total = 0;
// for (const value of list) {
// total += value; }
// return total / list.length; }
// console.log('Средняя оценка:', getAverage(grades).toFixed(2));
// let best = grades[0];
// for (const value of grades) {
// if (value > best) {
// best = value; } }
// console.log('Лучшая оценка:', best);

// Задача 12. map и filter
const numbers = [3, 8, 12, 5, 20, 1];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['Анна', 'Борис', 'Алексей', 'Вера'];
const startsWithA = names.filter((item) => item.startsWith('А'));
console.log(startsWithA.join(', '));
const upperNames = names.map((item) => item.toUpperCase());
console.log(upperNames);



const grades = [4, 4, 5, 3, 5];

console.log(grades.length); // 1

function analyzeGrades(list) {
  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total / list.length;
}
console.log('Средний балл:', analyzeGrades(grades).toFixed(2)); // 2

let best = grades[0];
for (const value of grades) {
  if (value > best) {
    best = value;
  }
}
console.log('Лучшая оценка:', best); // 3

let hg = grades[0];
for (const value of grades) {
  if (value < hg) {
    hg = value;
  }
}
console.log('Худшая оценка:', hg);


if (analyzeGrades(grades) > 3.5) {
  console.log('Зачет');
} else {
  console.log('Незачет');
}

