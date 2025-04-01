let arr = [1, 2, 3, 4];

Array.prototype.myforEach = function (func) {
  let context = this;
  for (let i = 0; i < context.length; i++) {
    func(context[i], i);
  }
};

arr.myforEach((item, index) => console.log(item, " ", index));
