/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var counter = 0;

    while(min <= max) {
        guess = Math.floor((max + min)/2);
        counter += 1;
        println(guess);
        if(array[guess] === targetValue) {
            println(guess);
            println("It took " + counter + " tries to guess correctly!");
            return guess;
        }
        else if(array[guess] < targetValue) {
            println(guess);
            min = guess + 1;
        }
        else {
            println(guess);
            max = guess - 1;
        }
    }
	return -1;
};




var result = doSearch(primes, 41);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 41), 12);
Program.assertEqual(doSearch(primes, 3), 1);
