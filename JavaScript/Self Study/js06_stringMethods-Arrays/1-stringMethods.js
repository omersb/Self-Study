// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

//! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.
const str1 = 'Clarusway';
const str2 = ' Hello';
const str3 = ' World';

console.log(typeof str1);
const str4 = str1 + str2; //* String concat
console.log(str4);

console.log(str4.concat(str3));

//! Non-primitive String tanımlama
const str5 = new String('Non-primitive String');
console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------
const s1 = 'hello';
const s2 = ' world';
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(' Clarusway', str2, ' Merhaba'));
console.log(s2, s3);

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
console.log(s3.charAt()); //! 0.indexste bulunan char'ı getirir
console.log(s3.charAt(4)); //! o
console.log(s3.charAt(s3.length - 1)); //! d

//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------
const word = 'To be or not to be, that is the question';

console.log(word.includes('to be')); //!true
console.log(word.includes('That')); //!false
console.log(word.includes('')); //!true
console.log(word.includes('to be', 14)); //!false
console.log(word.includes('to be', 13)); //!true

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------
const tobeIndex = word.indexOf('or');
console.log(tobeIndex);
console.log(word.indexOf('be')); //!3
console.log(word.lastIndexOf('be')); //!16
console.log(word.lastIndexOf('BE')); //!-1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
const word2 = 'Salına salına sinsice !';
console.log(word2.startsWith('sa')); //!false
console.log(word2.startsWith('sa', 7)); //! true
console.log(word2.endsWith('!')); //! true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = 'Oku Baban gibi, saf olma';
console.log(oku.replace('saf olma', 'akıllı ol'));
oku = oku.replace('saf olma', 'akilli ol');
console.log(oku);

//* Detaylı değiştirme alternatifleri için regex kullanılabilir.
console.log(oku.replace(/AKILLI/i, 'Zeki'));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
