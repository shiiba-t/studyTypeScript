import _ from "lodash";

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
