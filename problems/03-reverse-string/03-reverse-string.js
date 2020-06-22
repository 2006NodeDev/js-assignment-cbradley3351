/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//Reverse the string for example. Hello would be olleH
//call a reverse function on a array after adding strings indiv. to the array
//Use the join function to chain the letters back together


//The original line
console.log('Reverse the String!');
const str = 'Reverse the String!';


const newStr = str
        .split('') //splits the string into letters in an array 
                    // this allows me to use the reverse function
        .reverse() //Reverses characters in an array
        .join(''); //joins the whitespace between the letters

console.log(newStr);
