console.log('Hello World');

import karesi, {
  WHW,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from './mymodule.js';

// import { default as square, WHW, WORKING_HOURS_WEEK, dec, inc, sum } from './mymodule.js';

// console.log('WHW', WHW);
// console.log('WORKING_HOURS_WEEK', WORKING_HOURS_WEEK);
// console.log(karesi(4));

inc(4);
inc(6);
dec();
console.log('dec() :>> ', dec());
console.log('sum(3,9) :>> ', sum(3, 9));
inc();
console.log('counter :>> ', counter);
// ! sabite atama hatası
// counter = 29;

console.log('counter :>> ', counter);
