let box = document.getElementById('box');
let input1 = document.getElementById('input1');
let pic = document.getElementById('pic');

const img = document.createElement('img');
img.setAttribute('src', './foto.jpg');

pic.append(img);

const calculo1 = document.getElementById('calculo1');
const calculo2 = document.getElementById('calculo2');
const botonCalcular = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');
const form = document.getElementById('form');

form.addEventListener('submit', sumarInputValues);

// const h1 = document.querySelector('h1');

// h1.innerHTML = 'Se cambio esta vuelta';

// console.log(h1.getAttribute('class'));

// h1.classList.add('first2');
// h1.classList.remove('first2');

function sumarInputValues(event) {
  // console.log((event));
  event.preventDefault();
  const sumaInputs = calculo1.value + ' ' + calculo2.value;
  pResult.innerText = `Hola, ${sumaInputs}`;
}









