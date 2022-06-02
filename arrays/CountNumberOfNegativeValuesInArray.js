// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction8A(arr) {
  let cont = 0;
  arr.forEach(elem => {
    if (elem < 0) {
      cont++;
    }
  });
  return cont;
}

function myFunction8B(a) {
  let res = a.reduce(function (acc, cur) {
    if (cur < 0) {
      acc++;
    }
    return res;
  }, 0);
  return res;
}

function myFunction8C(arr) {
  return arr.filter(elem => elem < 0).length
}