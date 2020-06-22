/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/



function spliceElement(someArray, index)
    {

    someArray.splice(index-1, 1) //changing to -2, 2 will remove two elements
    //will remove -1 at one time from the right side of the array
    colors.splice(5,1, "White","Pink");  //This one SPLICES IN two colors at the 5th postition and it does it 1 time
    return someArray

    }

let colors = ["Cyan", "Magenta", "Yellow", "Black"]

console.log(spliceElement(colors, 4));
//Removes the color in the fourth position