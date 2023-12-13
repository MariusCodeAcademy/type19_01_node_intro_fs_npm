'use strict';
console.log('sum.js file was loaded');

function sum(n1, n2) {
  console.log('sum', n1 + n2);
}

function minus(n1, n2) {
  console.log('minus', n1 - n2);
}

// sum(15, 45);

// expotuosim failo gale
module.exports = {
  suma: sum,
  minus,
};
