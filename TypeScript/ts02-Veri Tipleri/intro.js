function selamVer(isim) {
    return "merhaba" + isim;
}
var mesaj = selamVer("Ömer");
console.log(mesaj);
var sayi = 10; // direk burada da değer ataya biliriz
sayi = 10;
sayi = 10.4;
// sayi = "Ankara" // hata
var sehir = "Adana";
sehir = "Ankara";
sehir = 'İstanbul';
// sehir = 10 // hata
var dogruMu = true;
dogruMu = true;
dogruMu = false;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var dizi = [1, 2, 3, "Ankara", true]; // her türlü değeri alır. Buna Tuples deniyor
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
