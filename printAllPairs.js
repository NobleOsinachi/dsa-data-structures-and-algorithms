let printAllPairs = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, " ", j);
    }
  }
};
const t1 = performance.now();
printAllPairs(1000);
const t2 = performance.now();
console.log((t2 - t1) / 1000, " seconds");
