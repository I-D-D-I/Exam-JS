'use strict';
// через фетч 1 вар 
const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
const data = await response.json()
console.log(data)

// 4) заводим массив под вырезки с объектом и с ключами
let texts = data; 
//[{id: 2143534645, text: 'Text', isChecked: false}];    
let selected = 0;   

const wrap = document.querySelector('.services__wrapper');  // находим div, куда добавляем вырезки
const card = document.querySelector('.services__item')    // находим div, где распологаем текст
const form = document.querySelector('.input-field');  //  находим форму
const checkbox = document.querySelector('.checkbox');  // находим checkbox
const count = document.querySelector('.header__num')   // находим счетчик
const addBtn = document.querySelector('.btn');  // находим button - текстовый фильтр по заголовку (фильтрация уже полученных элементов)
// const title = document.querySelector('.item__name');
// const text = document.querySelector('.item__text');
const input = document.querySelector('.input');

// отменяем стандартное поведение формы (обновление)
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
     

// делаем первую функцию на отрисовку вырезок
function drawTexts(obj) {
  const newCard = document.createElement('div');
  newCard.className = "services__item";
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  newCard.innerHTML = `<p class='item__name'>${obj.title}</p>
                      <p class='item__text'>${obj.body}</p>`;
  newCard.append(checkbox);
  const title = newCard.querySelector('.item__name');
  const text = newCard.querySelector('.item__text');
  // событие на чекбокс для подсчета и покраски 
  checkbox.addEventListener('change', (ev) => {
    newCard.classList.toggle('gray')
    title.classList.toggle('white')
    text.classList.toggle('white')
    if (ev.target.checked) {
      selected++;
      count.innerHTML = `${selected}`;
    } else {
      selected--;
      count.innerHTML = `${selected}`;
    }
  })
  return newCard;
}

data.forEach((el) => wrap.append(drawTexts(el)))  // 


// поиск по имени
function handleInput() {
  const valueInput = input.value;
  wrap.innerHTML = '';
  const newData = data.filter((item) => item.title.toLowerCase().includes(valueInput.toLowerCase().trim()));
  return newData.forEach((el) => wrap.append(drawTexts(el)))
  };
  input.addEventListener('change', handleInput);








