/**
 * Created by mac on 4/11/17.
 */
function fib(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fib(n - 1) + fib(n - 2);


}

function fact(n) {

    if(n == 1) return 1;

    return n * fact(n - 1);


}

let results = [];
function factOptimized(n, results) {
    if(n == 1) return 1;

    let previousFactorial = results[n - 1];

    if(!previousFactorial) {
        results[n] = n * factOptimized(n - 1, results);
    }

    return results[n];

}


function fibOptimized(n, results) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fib(n - 1) + fib(n - 2);


}