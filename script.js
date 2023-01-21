// const h1El = document.querySelector('.title');
// const buttonEl = document.querySelector('.btn');

// document.addEventListener('click', function (e) {


//   // h1El.textContent = 'Product add to cart';
//   if (h1El.textContent === 'Мой первый заголовок с JS') {
//     h1El.textContent = 'Product add to cart';
//   } else {
//     h1El.textContent = 'Мой первый заголовок с JS';
//   }






// });

// const h2El = document.querySelector('.heading');
// const inputEl = document.querySelector('.input');
// const changeEl = document.querySelector('.change');

// changeEl.addEventListener('click', function (e) {
//   // h2El.textContent = inputEl.value;
//   if (inputEl.value === '') {
//     h2El.textContent = "Введите текст в поле ввода";
//     inputEl.style.border = '1px solid blue';
//     inputEl.style.background = 'grey';
//   } else {
//     h2El.textContent = inputEl.value;
//   }
// });


// Минус этого метода, в том что постоянно идет запрос на сервер и отроботка.
// inputEl.addEventListener('input', function (e){
//   if (inputEl.value === '') {
//     h2El.textContent = "Введите текст в поле ввода";
    
//   } else {
//     h2El.textContent = inputEl.value;
//   }
// })







const data = [
  {
name: 'Bersache boots I',
desc: 'Зеленые ботинки',
price: 530,
img: 'https://cf.shopee.com.my/file/7104c5bfd9987558ef98d0cd9cdf4a5b_tn'
},
{
  name: 'Bersache boots II',
  desc: 'Зеленые ботинки',
  price: 500,
  img: 'https://cf.shopee.com.my/file/7104c5bfd9987558ef98d0cd9cdf4a5b_tn'
  },
  {
    name: 'Bersache boots III',
    desc: 'Зеленые ботинки',
    price: 480,
    img: 'https://cf.shopee.com.my/file/7104c5bfd9987558ef98d0cd9cdf4a5b_tn'
    },
    {
      name: 'Bersache boots IV',
      desc: 'Зеленые ботинки TOP',
      price: 999,
      img: 'https://cf.shopee.com.my/file/7104c5bfd9987558ef98d0cd9cdf4a5b_tn'
      },
]

const contentEl = document.querySelector('.content');

data.forEach(element => {
  const productEl = document.createElement('div');
productEl.classList.add('product');

const imgEl = document.createElement('img');
imgEl.src = element.img;
imgEl.classList.add('product__img');


const nameEl = document.createElement('a');
nameEl.href = '#';
nameEl.classList.add('product__name');
nameEl.textContent = element.name;

const descEl = document.createElement('p');
descEl.classList.add('product__des');
descEl.textContent = element.desc;

const priceEl = document.createElement('p');
priceEl.classList.add('product__price');
priceEl.textContent = element.price;

const buttonEl = document.createElement('button');
buttonEl.classList.add('product__button');
buttonEl.textContent = 'Купить JS';

productEl.appendChild(imgEl);
productEl.appendChild(nameEl);
productEl.appendChild(descEl);
productEl.appendChild(priceEl);
productEl.appendChild(buttonEl);
contentEl.appendChild(productEl);


buttonEl.addEventListener('click', function(e){
if (buttonEl.textContent === 'Купить JS') {
  buttonEl.textContent = 'Товар в корзине';
} else {
  
  buttonEl.textContent = 'Купить';
}
});
});








