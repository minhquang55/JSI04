const arr = [1, 2, 3, 4, 5, 6, 7];
const filterOdd = (arr) => {
  return arr.filter((number) => {
    return number % 2 !== 0;
  });
};

const arr1 = filterOdd(arr);
console.log(arr1);

// 
const arr3 = [5, 6, 7, 3, 4, 2, 11, 12];
const arr2 = arr3.sort((a, b) => {
  return b - a;
});

console.log(arr2[1]);

