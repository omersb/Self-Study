//! SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const t = prompt('Taban Degerini Giriniz:');
const h = prompt('Yukselik Degerini Giriniz:');

const alan = ucgenAlanHesapla(t, h);
alert(`UCGENIN ALANI:${alan}`);

function ucgenAlanHesapla(t, b) {
  return (t * h) / 2;
}

//! SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

const kareAl = (n) => n * n;
const kupAl = (n) => n * n * n;
const usAl = (t, u) => t ** u;

console.log('KARE:', kareAl(4));
console.log('KUP:', kupAl(3));
console.log('US:', usAl(2, 3));

//! SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

const artikYilMi = (yil) => {
  sonuc = (yil % 4 == 0 && yil % 100 != 0) || yil % 400 == 0;
  return sonuc ? `${yil} artik yildir` : `${yil} artik yil degildir`;
};

console.log(artikYilMi(2000));
console.log(artikYilMi(2001));
console.log(artikYilMi(2004));
