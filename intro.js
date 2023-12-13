'use strict';
console.log('intro.js file was loaded');
const { suma, minus } = require('./modules/helper');
const vidurkis = require('./modules/avg');

suma(15, 45);
minus(15, 45);

// parasyti funkcija kuri suskaiciuoja argumentu gauto masyvo vidurki
// ir iskonsolina rezultata

// getAvg([1,2,3]) => 2
// iskviesti su node ir pamatyti rez
vidurkis([1, 2, 3]);
