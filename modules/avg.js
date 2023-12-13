function getAvg(arr) {
  const avg = arr.reduce((total, sk) => total + sk / arr.length, 0);
  console.log('avg ===', avg);
  return avg;
}

// default export
module.exports = getAvg;
