const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject2");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve3");
  }, 2000);
});

Promise.any = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise) => {
      try {
        let output = await promise;
        resolve(output);
      } catch (err) {}
    });
  });
};

Promise.any([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});
