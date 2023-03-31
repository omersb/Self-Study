var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde" + "Yemek yiyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev._kat);
