// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

console.log('****** FUNC DECLARATION *********');

//* Örnek1:
//****************************************************************/
yazdir(); //!invoke

//! Declaration
//! Paramatre almamış, bir şey döndürmek (void function)
function yazdir() {
  console.log('Merhaba');
}

yazdir(); //!invoke
yazdir(); //!invoke

console.log(typeof yazdir); //* function

//* Örnek2: Parametreli Fonksiyon
//***************************************************************/
//! Bir parametreyi çağırma sırasında kullanmaz isek onun yerine default paramtere atayabiliriz. Önrketek lastName paramterinin default değerine '' atanmıştır.

function selamla(name, lastName = '') {
  console.log(`Merhaba ${name}  ${lastName}`);
}

selamla('Erhan', 'Yılmaz');
selamla('Erol');
selamla('jason');

//* Örnek3: Parametreli, Dönüş değerli
//***************************************************************/

function yasHesapla(year, name) {
  // const mesaj = `${name} in yaşı ${2022 - year} dir `;
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir `;
  return mesaj;
}

const mesaj1 = yasHesapla(2001, 'Elif');
console.log(mesaj1);

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
console.log(tekCift(5));
console.log(tekCift(2));

function tekCift(number) {
  return number % 2 === 0 ? `${number} çifttir` : `${number} tekdir`;
}
