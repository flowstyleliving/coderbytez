/*
  Learnings:
  -arguments object[0]
  -greater depth of arr.filter()
*/

function destroyer(arr) {
  // push the seek to destroy el to array
 var destroy = [];
  for(var i = 1; i < arguments.length; i++){
    destroy.push(arguments[i]);
  }
 // console.log(destroy)

 //filter through arr aka arguments[0]
 var x = arguments[0].filter(function(el) {
  // y is like a counter connected to the filter func
  var target = true;
   //loop thru the destroy array
  for(var i = 0; i < destroy.length; i++) {
    //compare it with each el in arr
    if(el === destroy[i]) {
      //if destroy is found, destroy it by setting target to false
      target = false;
    }
  }
   //keep if target is true, destroy if target is false
   return target;
 });

  //x marks the spot ;)
  return x;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
