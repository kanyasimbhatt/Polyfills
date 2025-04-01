let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

let allSettled = function (promiseArray) {
  let outputArray = [];
  let index = 0;

  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise) => {
      try {
        let output = await promise;

        outputArray.push({ status: "fulfilled", value: output });
      } catch (err) {
        outputArray.push({ status: "rejected", reason: err });
      }
      index++;

      if (index === promiseArray.length) resolve(outputArray);
    });
  });
};

allSettled([promise1, promise2, promise3, promise4]).then((data) => {
  console.log(data);
});
