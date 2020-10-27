function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item); //2
  var removed = arr.shift();   //3
 return removed;   //4
  return item;
  var queue = arr.push(item);

  var removeItem = arr.shift();

  return removeItem;  // Change this line

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));