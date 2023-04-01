//? Loops (döngüler)

let sehirler =["Ankara", "İstanbul", "İzmir"]

for (let i in sehirler) {
  console.log(i);             //! sehirler dizisinin indis numaralarına eşit olur.
}

for (let i of sehirler) {
  console.log(i);              //! sehirler dizisinin elemanlarına eşit olur.
}