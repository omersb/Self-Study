function topla(x,y) {
  return x+y;
}

function topla2(x:number,y:number):number {
  return x+y;
}

let topla3 = function(x:number,y:number):number {
  return x+y;
}

console.log(topla(2,3));
console.log(topla("Ankara",3));
console.log(topla2(2,4));
console.log(topla3(4,8));
// console.log(topla(2)); //! hata verir y değeri undefined

//? Optional and Default Parametreleri

function topla4(x:number,y:number=4):number {
  return x+y;
}

// console.log(topla4(3)); //! y değeri default değeri yukarda tanımladığımız 4 dür.

// function topla5(x:number,y?:number):number {
//     return x+y;
// }

// console.log(topla5(3)); //! y değeri optional yukarıda ? işareti ile tanımladık bunun socunu NaN verir.

function topla5(x:number,y?:number):number {
  if (y) {
    return x+y;
  }
  return x;
} //? bu şekilde yapmamız daha sağlıklıdır.

console.log(topla5(3))
console.log(topla5(3,40))