// const bttn = document.createElement('button');
// bttn.textContent = 'hello';
// document.body.prepend(bttn);
// bttn.addEventListener('click', handleClick);
    
//     function handleClick() {
//       return bttn.style.display = 'none';  
//     }

// function handleInput(value) {
//     console.log(value);
    // const p = document.createElement('p');
    // p.textContent = value;
    // document.body.prepend(p);
// }

// const inp = document.createElement('input');
// inp.textContent = 'hello';
// document.body.prepend(inp);
// inp.addEventListener('change', (e) => handleInput(e.target.value));
        
/////////////////////

// function handleInput(value) {
//     // console.log(value);
//     if (value == data.title) {
//         console.log(data.title);
//     }
//     // p.textContent = value;
//     // document.body.prepend(p);
// }

// const inp = document.querySelector('.header__input');
// // inp.textContent = 'hello';
// // document.body.prepend(inp);
// inp.addEventListener('input', (e) => handleInput(e.target.value));
    



// const obj = {
//     title: "100",
//     symbol: "💯",
//     keywords:
//       "hundred points symbol symbol wow wow win win perfect perfect parties parties",
//   };

/////////////////////////

// import { data } from './data.js'

// function createBox(data) {
//     for (let el of data) {
//         cont.append(createCard(el));
//     }
// }

        // createBox(data)

        // function createCard(newObj) {
        //     const cardNew = document.createElement('div');
        //     cardNew.className = 'services__item';
          
        //     const symbol = document.createElement('p');
        //     symbol.textContent = newObj.symbol;
        //     symbol.className = 'item__picture';
          
        //     const title = document.createElement('p');
        //     title.textContent = newObj.title;
        //     title.className = 'item__name';
          
        //     const keywords = document.createElement('p');
        //     keywords.textContent = newObj.keywords;
        //     keywords.className = 'item__text';
          
        //     cardNew.append(symbol, title, keywords);
        //     return cardNew;
        //   }
        
        //   createCard(data)
    
// const text = document.querySelector('.text');

// text.addEventListener('click', () => text.classList.toggle('red'))

import { data } from './data.js'

const cont = document.querySelector('.services__wrapper');
const inputLine = document.querySelector('.header__input');

data.forEach((el) => cont.append(createCard(el)))

  function createCard(newObj) {
    const cardNew = document.createElement('div');
    cardNew.className = 'services__item';
    newObj.keywords = [... new Set(newObj.keywords.split(' '))].join(' ');
    cardNew.innerHTML = `<p class='item__picture'>${newObj.symbol}</p>
            <p class='item__name'>${newObj.title}</p> 
            <p class='item__text'>${newObj.keywords}</p>`;
    return cardNew;
  }

inputLine.addEventListener('input', (e) => handleInput(e.target.value));

function handleInput(e) {
    cont.innerHTML = ' ';
    let value = e.toLowerCase().trim();

    data.filter((item) => item.title.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    data.filter((item) => item.keywords.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))
};

