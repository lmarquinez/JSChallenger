// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function myFunction16A(arr) {
   return arr.sort(function (a, b) {
      return a.b - b.b;
   });
}

function myFunction16B(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}