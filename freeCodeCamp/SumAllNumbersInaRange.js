
function sumAll(arr) {
  var wop = [];
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);

  for(var i = min; i <= max; i++) {
    wop.push(i);
  }


  var result = wop.reduce(function(total, num) {
    return total + num;
  });

  console.log(result);
  return result;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
