// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x, y) => x + y;

//! Arrow fonksiynlarda eğer tek bir ifade kullanılrsa süslü paranteze
//! ihtiyaç olmaz ve dolayısla return gerekmek. aksi takdirde gerekir.
const usAl = (t, u) => {
  return t ** u;
};

const usAl2 = (t, u) => t ** u;

console.log('SONUC =', topla(5, 3));
console.log('US:', usAl(2, 3));
console.log('US:', usAl2(2, 3));

// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
  console.log('============================');
  console.log(' JAVASCRIPT ÇOK KOLAYMIŞ');
  console.log('============================');
  return times * 2;
};

console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? 'TEKTIR' : 'CIFTIR');
const tekMi = (n) => (n % 2 ? 'TEKTIR' : 'CIFTIR');

console.log(tekMi(3));

//* Örnek2:
//*************************************************************/

const r = prompt('yarıçapı griniz');
const h = prompt('yukseklik giriniz');

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log('Silindirin hacmi :', Math.trunc(hacimHesapla(r, h)));
console.log('Silindirin hacmi :', hacimHesapla(r, h).toFixed(1));
