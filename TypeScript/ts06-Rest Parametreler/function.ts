//? Rest Parametreleri

function davetEt(ilkDavetli: string, ...digerleri: string[]) {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Engin", "Derin", "Salih", "Ali"));

function davetEt2(...digerleri: string[]) {
  return digerleri.join(" ");
}

console.log(davetEt2("Engin", "Derin", "Salih", "Ali"));

//! Okunuş açısından ve kullanıcıyı yönlendirmek açısında davetEt kullanmak daha iyidir.