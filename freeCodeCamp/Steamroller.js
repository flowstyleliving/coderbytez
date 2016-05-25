
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];

  var flatten = function(arg) {
    console.log("newArr = ", newArr);
    console.log("arg = ", arg);
    if(!Array.isArray(arg)) {
      newArr.push(arg);
      console.log("!Array = ", arg);
    } else {
      for (var a in arg) {
        //makes array not an array, takes out element
        flatten(arg[a]);
        console.log("flatten = ", arg[a], "a = " + a);
      }
    }
  };

  arr.forEach(flatten);
  console.log("woo = ", newArr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

//return [1, 2, 3, 4]
