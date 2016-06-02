/*
  Learnings:
  -Do things in order
  -Paste results in the order you want
*/

function convert(num) {
  var roman = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['','X', 'XX', 'XXX', 'XL', 'L', "LX", 'LXX', 'LXXX', 'XC'],
    ['M', 'MM', 'MMM']
  ];
  num = num.toString().split('').reverse();
  var result = '';

  for(var i = 0; i < num.length; i++) {
    //console.log(num)
    //console.log('numi', [num[i]], i, roman[i][num[i]])
    result = roman[i][num[i]] + result;
  }
  console.log(result);
 return result;
}

convert(36);
convert(2);
