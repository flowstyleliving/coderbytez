/*
 Learned:
 -comparators are fucking weird sometimes.
 -just do it the SIMPLEST way possible, what is it asking for?
 -then do it that way :)
 -ughoof this was annoying
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b) {
    return a - b;
  });
  //console.log('sorted', arr);
  var here = 0;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < num){
    here = i + 1;
    } else return here;
  }

  /*
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      arr.splice(i, 0, num);
      console.log('sorted1', arr);
      here = arr.indexOf(num);
      return;
    } else if(arr[i] <  num < arr[i+1]) {
      arr.splice(i+1, 0, num);
      console.log('sorted+', arr);
      here = arr.indexOf(num);
      return;
    } else return;
    return;
  }

//  console.log(sorted);

*/

  return here;
}

getIndexToIns([40, 60], 50);
