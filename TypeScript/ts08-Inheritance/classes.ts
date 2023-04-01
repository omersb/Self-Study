//? Inheritance (Kalıtım-Miras Alma)

class Kisi {
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
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()