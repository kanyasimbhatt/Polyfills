function modify(n) {
  return n * 2;
}

Array.prototype.mymap = function (func) {
  let arr = this;
  let outputarr = [];
  for (let i of arr) {
    outputarr.push(func(i));
  }

  return outputarr;
};

let arr = [1, 2, 3, 4];
console.log(arr.mymap(modify));
