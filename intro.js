'use strict';
console.log('intro.js file was loaded');

function sum(sk1, sk2) {
  console.log(sk1 + sk2);
}

sum(15, 45);

// parasyti funkcija kuri suskaiciuoja argumentu gauto masyvo vidurki
// ir iskonsolina rezultata
function getAvg(arr) {
  const avg = arr.reduce((total, sk) => total + sk / arr.length, 0);
  console.log('avg ===', avg);
  return avg;
}
// getAvg([1,2,3]) => 2
// iskviesti su node ir pamatyti rez
getAvg([1, 2, 3]);
