// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction11A(arr) {
  let sumaTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumaTotal += arr[i];
  }
  return sumaTotal / arr.length;
}

function myFunction11B(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
