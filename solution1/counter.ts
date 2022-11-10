// 1. Counter Function

function counter(a: number = 0) {
  return [
    function () {
      console.log(a);
      return a;
    },

    function () {
      a = a + 1;
    },
  ];
}

var [getA, getB] = counter(0);

getA();
getB();
getB();
getA();
