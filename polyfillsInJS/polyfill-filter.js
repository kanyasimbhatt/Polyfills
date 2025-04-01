let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myfilter = function (func) {
  let ref = this;
  let newarr = [];
  for (let i of ref) {
    if (func(i)) {
      newarr.push(i);
    }
  }
  return newarr;
};

let arr1 = arr.myfilter(function (x) {
  return x > 4;
});

console.log(arr1);
