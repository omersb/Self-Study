//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

console.log('OYUN');

let hak = 5;

const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rasgeleSayi);

do {
  const tahmin = prompt('Lütfen 0-100 arasında bir sayi giriniz:');
  hak -= 1;
} while (hak > 0);
