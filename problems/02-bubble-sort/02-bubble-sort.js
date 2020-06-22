/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
// Bubble sort works by repeatedly swapping the adjacent number,
//if it's in the wrong order.

//Known as the slowest way to sort because of the nested four loops.
// If the value on the left is greater than the value on the right they swap places
//Final position no longer has to be sorted as it will be correct



function bubbleSort (arr) {
    let temp
    swapped = false; //exit from execution once swapped
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            }

        }
        
        
    }
    return arr
}






const arr = [6,22,94,8,28,96,11,17,72,5,1,96]
//I assigned these as const as they will not change, they will just be sorted

console.log(bubbleSort(arr));
//This will log out my array so it can be seen in the console.
