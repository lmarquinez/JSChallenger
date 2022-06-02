// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction13A(arr) {
  let equal = true;
  arr.forEach(function (elem) {
    if (elem !== arr[0])
      equal = false;
  });
  return equal;
}

function myFunction13B(arr) {
  let i = 0;
  let equals = true;
  while (equals && i < arr.length) {
    equals = arr[i] === arr[0];
    i++;
  }
  return equals;
}

function myFunction13C(arr) {
  return new Set(arr).size === 1
}

function myFunction13D(arr) {
  return arr.every((el) => el === arr[0]);
}