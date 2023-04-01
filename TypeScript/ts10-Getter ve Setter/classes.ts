//? Getter ve Setter Metotları


class Kisi {
  private _isim: string

  get isim(): string {                 //! get metodu ile isim değişkeninin değerini döndürüyoruz
    return "Sayın : " + this._isim    //! bunada kapsülleme denir
  }

  set isim(ad: string) {
    this._isim = ad
  }

  kaydet() {
    console.log("Kişi Kaydedildi")
  }
}

class Musteri extends Kisi {
  satisYap() {
    console.log("Satış Yapıldı")
  }
}

class Personel extends Kisi {
  maasOde() {
    console.log("Maaş Ödendi")
  }
}

let musteri = new Musteri()

musteri.isim = "Ömer"
console.log(musteri.isim);

musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()