/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.

//Need to come back to this and correct it, but for now it's a switch statement

let printShape = 3;

switch (printShape) {
  case 3:
  console.log('Triangle');
  break;

  case 4:
  console.log('Square');
  break;

  case 5:
  console.log('Pentagon');
  break;

  case 6:
  console.log('Hexagon');
  break;

  default:
  console.log('No shape stored');
  break;
}
