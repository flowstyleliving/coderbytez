function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while(arr.length > 0) {
    newArr.push(arr.splice(i, size));
      // console.log('x', x);
      //  console.log(newArr);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
