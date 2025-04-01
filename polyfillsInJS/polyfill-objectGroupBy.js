const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

function callbackFunc(obj) {
  return obj.quantity < 300 ? "low" : obj.quantity < 400 ? "okayy" : "great";
}

// console.log(Object.groupBy(fruits, callbackFunc));

Object.prototype.myGroupBy = function (arr, callback) {
  let map = new Map();
  arr.forEach((element) => {
    let output = callback(element);
    if (map.has(output)) {
      let arr = map.get(output);
      arr.push(element);
      map.set(output, arr);
    } else {
      let newarr = [element];
      map.set(output, newarr);
    }
  });
  let outputObj = {};
  for (let i of map) {
    outputObj[i[0]] = i[1];
  }
  return outputObj;
};

console.log(Object.myGroupBy(fruits, callbackFunc));
