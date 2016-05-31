/*
  Learnings:
  -Object.keys() to take out the key of a selected object and throw into var
*/

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  /*keys = 'last' */

  //console.log('keys', keys)
  return collection.filter(function(item) {
    //console.log('item[keys]', item[keys])
    //console.log('source[keys]', source[keys])

  //item[keys: 'Montague']     // object[keys: 'Capulet']
    return item[keys] === source[keys];
  });

  /*for(var i = 0; i < collection.length; i++) {
        console.log(collection[i], source);
      if(collection[i].some(source)) {
        arr.push(collection[i]);
      }
  }
  */
  // Only change code above this line
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
