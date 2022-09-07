//!ÖDEV1:fiyatlar dizisinde her bir fiyata %10 zam yapalım.
//? NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach((fiyat, indis, dizi) => {
  dizi[indis] = Math.round(fiyat * 1.1);
});
console.log('**** ODEV1 *****');
console.log(fiyatlar);

//!ÖDEV2:fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.
console.log('**** ODEV2 *****');
fiyatlar.filter((f) => f > 90).forEach((f) => console.log(f));

//! ÖDEV3: fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.
console.log('**** ODEV3 *****');
fiyatlar
  .filter((f) => f < 110)
  .map((f) => Math.round(f * 1.1))
  .forEach((f) => console.log(f));

//! ÖDEV4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.
console.log('**** ODEV4 *****');
const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((m) => m < 4000).map((m) => m * 1.5);
console.log(zamliMaaslar);

//! ÖDEV5:Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.
console.log('**** ODEV5 *****');
maaslar.filter((m) => m > 4000).forEach((m) => console.log(m));

//! ÖDEV6: Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.
console.log('**** ODEV6 *****');
//? REDUCE ILE
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

//? FOREACH ILE
let toplamMaas1 = 0;
maaslar.forEach((maas) => (toplamMaas1 += maas));
console.log(toplamMaas1);
