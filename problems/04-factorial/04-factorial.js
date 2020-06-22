/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

//factorial 5 x 4 x 3 x 2 x 1
// n! = n x (n-1) x (n-2) x (n-3) x (n-2) x (n-1)
function factorial(sumNum) {
    //0! = 1, 1! =1
        if(sumNum > 0 && sumNum <= 1) {
        return 1;
  }
  else {
      return sumNum * factorial(sumNum-1);
  }
}

console.log(factorial(5));
