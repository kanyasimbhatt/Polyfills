console.log(1);
let promise1 = new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});
console.log(3);
let promise2 = new Promise((resolve, reject) => {
  console.log(4);
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});
console.log(5);
let promise3 = new Promise((resolve, reject) => {
  console.log(6);
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});
console.log(7);
let promise4 = new Promise((resolve, reject) => {
  console.log(8);
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});
console.log(9);
let allMimic = function (arrOfPromise) {
  console.log(10);
  let output = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    try {
      console.log(11);
      arrOfPromise.forEach(async (a) => {
        console.log(12);
        const res = await a;
        console.log(13);
        resolvedCount++;
        output.push(res);
        if (resolvedCount == arrOfPromise.length) resolve(output);
      });
    } catch (err) {
      reject(err);
    }
  });
};

allMimic([promise1, promise2, promise3, promise4]).then((arr) => {
  console.log(arr);
});
console.log(14);
