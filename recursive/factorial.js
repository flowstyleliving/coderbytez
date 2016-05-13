var factorial = function(n) {
    var result = 1;
    for(var i = result; i <= n; i++) {
        result *= i;
    }
    return result;
};

println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 3! is " + factorial(3));
println("The value of 0! should be 1");
println("The value of 6! is " + factorial(6));

Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(3), 6);
Program.assertEqual(factorial(6), 720);
