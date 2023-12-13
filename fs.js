'use strict';
// Node integruotas modulis dirbti su file system

const fs = require('fs');

console.log('fs.js file was loaded');

// sukurti faila ir irasyti informacija

function irasyk() {
  fs.writeFile('testas.txt', 'username=James Band\ntown=London', (error) => {
    if (error) {
      // yra klaidu
      console.log('error sukuriant faila ===', error);
    } else {
      console.log('failas sukurtas');
    }
  });
}

// nuskaityti failo informacija

fs.readFile('testas.txt', (error, data) => {
  if (error) {
    // yra klaidu
    console.log('error nuskaitant faila ===', error);
  } else {
    // klaidu nera
    console.log(data.toString());
    const atsString = data.toString();
    const atsArr = atsString.split(',');
    console.log('atsArr ===', atsArr);
  }
});
