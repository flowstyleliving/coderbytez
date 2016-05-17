// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var q = p;
    println("pivot = " + array[r]);


    for(var j = p; j < r; j++) {
    // Compare array[j] with array[r], for j = p, p+1    ,...r-
    println("j = " + array[j]);
    println("q = " + array[q]);
    println(array);
        if(array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }

    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j.
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    swap(array, r, q);
    return q;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 4);
Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

var array1 = [9, -7, -5, 11, 12, -2, 0, 3, 10, 4, 5];
var q = partition(array1, 0, array1.length-1);
println("Array after partitioning: " + array1);
Program.assertEqual(q, 6);
Program.assertEqual(array1, [-7,-5,-2,0,3,4,5,12,10,9,11]);
