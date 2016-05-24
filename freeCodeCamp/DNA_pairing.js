
function pairElement(str) {
  //pairs A, T && G, C
  var arr = str.split('');
  //console.log(arr);
  var finArr = [];


  for(var i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "G":
        finArr.push([arr[i], 'C']);
        break;
      case "C":
        finArr.push([arr[i], 'G']);
        break;
      case "A":
        finArr.push([arr[i], 'T']);
        break;
      case "T":
        finArr.push([arr[i], 'A']);
        break;
    }
  }

  //console.log(finArr);
  return finArr;
}

pairElement("GCG");
