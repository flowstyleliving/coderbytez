
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var x = str.substr(-1);
  if(x === target){
    return true;
  } else return false;
}

confirmEnding("Bastian", "n");
