//? Private Protected Public Erişim Belirleyicileri
class Ev {
  public _odaSayisi: number;          //! Default olarak public. Public her yerden erişilebilir.
  private _pencereSayisi: number;     //! Private sadece class içinde erişilebilir
  _kat: number;
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this._odaSayisi = odaSayisi;
    this._pencereSayisi = pencereSayisi;
    this._kat = kat;
  }
  yemekYe() {
    console.log(this._kat + " katlı evde" + "Yemek yiyildi");
  }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev._kat);


class Kisi {
  protected isim: string              //! Protected sadece class içinde ve miras alınan classlarda erişilebilir
  kaydet() {
    console.log("Kişi Kaydedildi")
  }
}

class Musteri extends Kisi {
  satisYap() {
    this.isim = "Mehmet"             //! Protected olduğu için miras alınan classlarda erişilebilir
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