/**
 * In order to optimize the fibonacci function, use memoization!
 * fibonacci(5) --> 5
 * fibonacci(10) --> 55
 * fibonacci(15) --> 610
 *
 * @param {Number} num the nth number of a fibonacci series
 * @return {Number} the result of the nth number of a fibonacci series.
 */
function fibonacci(num) {
    if (num <= 2) {
        switch (num) {
            case 1: case 2: return 1;
            case 0: return 0;
            default: throw new Error("Please insert a positive integer");
        }
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciIter(num) {
    if (num <= 2) {
        return 1;               // First two numbers of fib sequence is equal to 1
    } else {
        var result = 0;         // variable holding result
        var counter = 2;        // Starting point of iteration
        var prevNo = 1;         // prev number aka xn-1. Equals one. Fib sequence starts like 1,1,2,3,5 ...
        var prevPrevNo = 1;     // prev number of previous number aka xn-2.Equals one. Fib sequence starts like 1,1,2,3,5 ...
        while (counter < num) {
            result = prevNo + prevPrevNo;   // xn = xn-1 + xn-2
            var temp = prevNo;              // Temp variable to store value
            prevNo = result;                // xn-1 = xn
            prevPrevNo = temp;              // xn-2 = xn-1. Make sense right?
            counter++;
        }
    }
    return result;
}

console.log(fibonacciIter(10)); // 55
