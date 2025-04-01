let arr = [1, 2, 3, [4, [5, 6, [7, 8]], 11], [9, 10]];

// let flatarr = [];
// function flatrecurr(arr) {
//   for (let a of arr) {
//     if (Array.isArray(a)) {
//       flatarr.push(a);
//     } else {
//       flatrecurr(a);
//     }
//   }
// }
// flatrecurr(arr);
// console.log(flatarr);

//---------------------------------------------

let str = arr.toString();
let flattedarr = [];

str = str.split(",");

for (let i of str) {
  flattedarr.push(+i);
}

console.log(flattedarr);

//--------------------POLYFILL FOR FLAT FUNC---------------------------

Array.prototype.myflat = function (val) {
  let arr = this;
  let flatarr = [];
  function flatrecurr(arr) {
    for (let a of arr) {
      if (Array.isArray(a)) {
        if (val--) flatrecurr(a);
        else flatarr.push(a);
      } else {
        flatarr.push(a);
      }
    }
  }
  flatrecurr(arr);
  return flatarr;
};

let arr1 = [1, 2, 4, 5, [2, 4, 5, [6, [6]]]];

console.log(arr1.myflat(Infinity));
