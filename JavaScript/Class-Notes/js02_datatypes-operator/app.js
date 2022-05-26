// let a;
// console.log(a);
// console.log(b);
// console.log('hello')


// console.log(a);
//  var a = 3;
//  var aa = 2;
//  console.log(a);

// console.log(b);
// let b = 1;12
// console.log(b);


// let c = '2';
// let d = 2;

// console.log(typeof c)
// console.log(typeof d)

// let e = +prompt('Bir şey yazınız : ');

// console.log(typeof e);


// let f = null;
// console.log(typeof f)


// let g = 3.15;
// let h = 1_000_000;

// console.log(typeof g)
// console.log(typeof h)

// let i = 999_999_999_999_999;
// console.log(i)
// let j = 999_999_999_999_868_123;
// console.log(j)


// let k = +prompt('Bir sayi giriniz : ');

// console.log(typeof k, k);

// console.log(isNaN(k))


// let x;

// do {
//   x = prompt('Enter a Number :')
// } while (isNaN(x));

// console.log(x * x);


// console.log(015+025)
// console.log(018+025)

// let l = 0.1 + 0.2;
// console.log(l)
// console.log(+l.toFixed(2));

// let m = 'Hello World';
// let n = "Merhaba Dunya";


// console.log(typeof m)
// console.log(typeof n)

// let userName = 'Mark';

// let p = `Merhaba ${userName}`;
// console.log(p)

const myCar = {
  make : 'ford',
  model : 'Mustang',
  year : 1965,
  color : 'Black'
}

// console.log(myCar);

myCar.color = 'Red';

myCar.sunRoof = true;


myCar.age = function(current) {
  console.log(current - this.year)
}

console.log(myCar);

myCar.age(2022);

delete myCar.sunRoof;

console.log(myCar)

