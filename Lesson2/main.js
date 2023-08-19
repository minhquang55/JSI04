// forEach
const for1 = [0,1,2,3,4,5];
for1.forEach((item) => {
  console.log(item);
})

// filter
const arr1 = [0,1,2,3,4,5];  // arr3 = [0,2,4,6,8,10]
// const arr2 = arr1.filter((item) => {
//   if (item%2 === 0) {
//     return true;
//   }
//   return false;
// })
const arr2 = arr1.filter((item) => item%2 === 0);

console.log(arr2);
// map
// const arr3 = arr1.map((item) => {
//   return item*2;
// })
const arr3 = arr1.map((item) => item*2)
console.log(arr3);

const compare = 1 !== '1';
console.log(compare);
