/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */


//0 is even and 1 is odd
function isEven(someNum){
    if(someNum<0||someNum>0){
        num = Math.abs(someNum) //gives the absolute value of the number, non negative value of x reguardless of the sign
    let f = Math.floor(someNum/2)  // function returns the largest integer less than or equal to a given number.
    let mod = someNum - 2 * f;
 
    if(mod === 0) {return true}
    else {return false}
}
}

console.log(isEven(41));



///used mod which is basically % so this probably won't count


    
    