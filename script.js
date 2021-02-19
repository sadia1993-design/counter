let countIncrement = document.getElementById('count-increment');
let countDecrement = document.getElementById('count-decrement');
let countReset = document.getElementById('count-reset');
var counter = document.getElementById('countInput');
var intValue = 0;

countIncrement.addEventListener('click', function () {
  intValue += 1;
  counter.value = intValue;
});

countDecrement.addEventListener('click', function () {
  intValue -= 1;
  counter.value = intValue;
});

countReset.addEventListener('click', function () {
  intValue = 0;
  counter.value = intValue;
});
