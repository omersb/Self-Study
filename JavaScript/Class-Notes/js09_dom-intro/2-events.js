//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//? METHOD-3 (ONLY JAVASCRIPT)
//?--------------------------------------------------------
// document.getElementById('header').onmouseover = function () {
//   document.getElementById('header').style.color = 'red';
// };

const header = document.getElementById('header');

header.onmouseover = function () {
  header.style.color = 'red';
};

header.onmouseout = function () {
  header.style.color = 'black';
};

//? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
//?-------------------------------------------------------
const myImg = document.querySelector('img');

myImg.addEventListener('mouseover', () => {
  myImg.style.transform = 'translateY(5px)';
});

myImg.addEventListener('mouseout', () => {
  myImg.style.transform = 'translateY(-5px)';
});

myImg.addEventListener('mouseover', () => {
  myImg.style.transform = 'scale(1.2, 1.4)';
});

myImg.addEventListener('mouseout', () => {
  myImg.style.transform = 'scale(1)';
});

//* -------------------------------------------------
//* EXAMPLE-2 (Button onclick)
//* -------------------------------------------------

const button = document.querySelector('#btn');

button.addEventListener('click', function (event) {
  console.log(event.target);
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to right,purple, yellow)';
  button.textContent = 'Search';
});
