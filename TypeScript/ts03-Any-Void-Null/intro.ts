function selamVer(isim:string) {
  return "merhaba" + isim
}

let mesaj = selamVer("Ömer")

console.log(mesaj);

let sayi:number = 10 // direk burada da değer ataya biliriz
sayi = 10
sayi = 10.4
// sayi = "Ankara" // hata

let sehir:string = "Adana"
sehir = "Ankara"
sehir = 'İstanbul'
// sehir = 10 // hata

let dogruMu:boolean = true
dogruMu = true
dogruMu = false

let sayilar:number[] = [1,2,3]
let sayilar2:Array<number> = [1,2,3]

let dizi:any[] = [1,2,3,"Ankara",true] // her türlü değeri alır. Buna Tuples deniyor

enum Renk {Kirmizi=1, Siyah, Mavi}
let renk : Renk = Renk.Kirmizi


// Any-Void-Null
let deger : any = "Ankara"
deger = 2
deger = {}

let deger2 : void = undefined // hiçbir şey döndürmeyen fonksiyonlarda kullanılır

function selamVer2():void {
  console.log("Merhaba")
}

// undefined ve null

let yas : number; // undefined
yas = 10  // değer atandı

class Musteri {  // null
}
