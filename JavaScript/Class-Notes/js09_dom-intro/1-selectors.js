//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log('***** SELECTORS *****');

//* =====================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* EXAMPLE-1 (Paragraph Style)
//*-------------------------------------------------------

const header = document.getElementById('header');
console.log(header);

header.style.color = 'red';

//* EXAMPLE-2 (Button Style)
//*---------------------------------------------------
const button = document.getElementById('btn');
btn.style.backgroundColor = 'black';
btn.style.color = 'yellow';
btn.style.fontSize = '2rem';

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* ======================================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------------------

const img = document.getElementsByTagName('img');
console.log(img);

img[0].style.border = 'solid';
img[0].style.borderColor = 'red';
img[0].style.transform = 'rotate(-5deg)';

//*======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* ======================================================

//* EXAMPLE-4
//* ---------------

const par = document.getElementsByClassName('par');
par[0].textContent = 'DOM Manipülasyonu';
