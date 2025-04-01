const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve3");
  }, 1000);
});

Promise.race = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise) => {
      try {
        let output = await promise;
        resolve(output);
      } catch (err) {
        reject(err);
      }
    });
  });
};

Promise.race([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});
