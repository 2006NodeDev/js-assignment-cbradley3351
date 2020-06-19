/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

/* “In mathematics, the Fibonacci numbers are the numbers in the following 
integer sequence, called the Fibonacci sequence, and characterized by the fact that 
every number after the first two is the sum of the two preceding ones.” */

//fibonacci in a if.Else Statement
function fibbonacci(n) {

        if( n < 2 ){
            return n;
        }
        else {
            return(fibbonacci(n-2)+fibbonacci(n-1));
        }
}


console.log(fibbonacci(9));

/// * * * Tried a couple of others below

//fibbonacci sequence in an array
function fib(n) {
    let arr = [0,1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
        }
        return arr[n]
}

console.log(fib(11));


//the recursive solution?
function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib (n - 2)
}

console.log(fib(5));

