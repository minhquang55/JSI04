const users = [
  {
    id: 1,
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      city: "Gwenborough",
    },
    company: {
      name: "Vingroup",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      city: "McKenziehaven",
    },
    company: {
      name: "MindX",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    address: {
      street: "Douglas Extension",
      city: "McKenziehaven",
    },
    company: {
      name: "MindX",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    address: {
      street: "Hoeger Mall",
      city: "South Elvis",
    },
    company: {
      name: "Vingroup",
    },
  },
];

const userMindX = users.filter((user) => user.company.name === "MindX");
const userVin = users.filter((user) => user.company.name === "Vingroup");


console.log(userVin[1].name);


const arr = [0,1,2,3,4,5];

const filterOdd = (arr) => {
  return arr.filter((number) => number%2 === 1)
}

const arr1 = filterOdd(arr);

console.log(arr1);