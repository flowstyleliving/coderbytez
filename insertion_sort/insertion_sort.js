var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for(var i = 0; i < array.length -1; i++) {
    insert(array, i , array[i + 1]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


var array1 = [0, -11, 99, 8, 9, 17, 142];
insertionSort(array1);
println("Array1 after sorting:  " + array1);
Program.assertEqual(array1, [-11, 0, 8, 9, 17, 99, 142]);
