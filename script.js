//1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(arr) {
  let num = arr.pop();
  if (arr.length === 0) {
    return num;
  } else {
    return (num += getSum(arr));
  }
}

console.log(getSum(arr));


//1 option 2

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSumm(array) {
  let num = array.shift();
  return array.length === 0 ? num : (num += getSumm(array));
}

console.log(getSumm(array));


//2

function deepCount(arr) {
  let count = arr.length;
  if (count === 0) {
    return count;
  } else {
    for (const item of arr) {
      if (Array.isArray(item)) {
        count += deepCount(item);
      }
    }
    return count;
  }
}

//2 option 2

function deepCount(arr) {
  let count = arr.length;
  for (const item of arr) {
    Array.isArray(item) ? (count += deepCount(item)) : count;
  }
  return count;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));


//3

const employees = {
  development: {
    backend: [
      { name: "Mike", salary: 2000 },
      { name: "Nikola", salary: 2500 },
    ],
    frontend: [
      { name: "Artem", salary: 3000 },
      { name: "Alex", salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: "Nina", salary: 1000 },
        { name: "Olena", salary: 1300 },
      ],
      promotion: [
        { name: "Oleg", salary: 1400 },
        { name: "Masha", salary: 1700 },
      ],
    },
    sellers: [
      { name: "Max", salary: 900 },
      { name: "Donald", salary: 700 },
      { name: "Joe", salary: 1100 },
    ],
  },
  designer: [{ name: "Kate", salary: 1800 }],
};

function takeSumSalary() {
  let sum = 0;
  return function sumSallary(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employee) => (sum += employee.salary));
      } else {
        sumSallary(obj[key]);
      }
    }
    return(sum)
  }
}

let salary = takeSumSalary();
salary(employees)

console.log(salary());

//4

let arr1 = [2,15,7,3];
let arr2 = [9,3,17,12,4,8];
let arr3 = [6,11,16,15,11];

let numbers = [...arr1, ...arr2, ...arr3];
let maxNumber = Math.max(...numbers)

console.log(maxNumber)


