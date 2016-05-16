// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }
    println("lowH = " + lowHalf);
    println("highH = " + highHalf);

    k = p;
    i = 0;
    j = 0;
    //**temp arrays have been filled and merge is ready to start**

    while(i < lowHalf.length && j < highHalf.length)  {
        println("k = " + k);
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf

    if(lowHalf[i] < highHalf[j]) {
         //  and copy the lower of the two back into array
        array[k] = lowHalf[i];
        println(array);
        i++;
    } else {
        array[k] = highHalf[j];
        println(array);
        j++;

    }
    // Once one of lowHalf and highHalf has been fully copied
        //  back into array, copy the remaining elements from the
    println("i = " + i);
    println("j = " + j);
    k++;
    //  other temporary array back into the array
    }

    while(i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
    while(j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }

};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var array1 = [-33, -7, 1, 0, 22, 69, 96, 144];
merge(array1, 0,
    Math.floor((0 + array1.length-1) / 2),
    array1.length-1);
println("Array after merging: " + array1);
Program.assertEqual(array1, [-33,-7,1,0,22,69,96,144]);
