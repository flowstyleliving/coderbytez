function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while(arr.length > 0) {
    var x = arr.splice(i, size);
      console.log('x', x);
       newArr.push(x);
       i = 0;
       console.log(newArr);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
