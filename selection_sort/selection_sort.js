var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var min;
    for(var i = 0; i < array.length; i++) {
    min = indexOfMinimum(array, i);
    swap(array, i, min);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array1 = [22, 1, 0, -2, 9, 7, 42];
selectionSort(array1);
println("Array1 after sorting:  " + array1);

Program.assertEqual(array1, [-2,0,1,7,9,22,42]);
