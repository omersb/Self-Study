//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
console.log('****** NEW OPERATORS *******');
// const car = {
//   name: 'BMW',
//   model: 1990,
//   engine: 1.6,
// };

//* 1.YONTEM (Classical)
// console.log(car.model);
// console.log(car['name']);

//* 2.YONTEM: DESTRUCTURİNG
// const {name, model, engine} = car;
// console.log(name, model, engine);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const {car1, car2} = cars;
console.log(car1, car2);

const {name: c1name, model: c1model} =car1;
console.log(c1name, c1model);

const {name: c2name, model: c2model} = car2;
console.log(c2name, c2model);