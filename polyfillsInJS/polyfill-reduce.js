let arr = [1, 2, 3, 4];

let newarr = arr.reduce((a, b) => {
  return a + b;
}, 0);

function func(i, a) {
  return i + a;
}

Array.prototype.myreduce = function (func, initial) {
  let arr = this;
  let n = initial ?? 0;
  for (let i of arr) {
    n = func(n, i);
  }
  return n;
};

console.log(arr.myreduce(func, 0));
