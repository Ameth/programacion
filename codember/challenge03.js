/*
['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
*/

const array1 = ["red", "blue", "red", "blue", "green"];
const array2 = ["green", "red", "blue", "gray"];
const array3 = ["blue", "blue", "blue", "blue"];
const array4 = ["red", "green", "red", "green", "red", "green"];
const array5 = ["blue", "red", "blue", "red", "gray"];
const array6 = ["red", "red", "blue", "red", "red", "red", "green"];
const array7 = ["red", "blue", "red", "green", "red", "green", "red", "green"];

let sum = 0;
let color1 = "";
let color2 = "";

let lastSum = 0;
let lastColor = "";

data.forEach((item, index, array) => {
  if (index === 0) {
    sum++;
    color1 = item;
  } else if (index === 1) {
    if (item != color1) {
      sum++;
    }
    color2 = item;
  } else {
    if (item == color2 || item != color1) {
      if (sum > lastSum) {
        lastSum = sum;
      }

      if (array.length % 2 === 0) {
        lastColor = item;
      } else {
        lastColor = array[index - 1];
      }

      sum = 0;
      color1 = array[index - 1];
      color2 = item;
    } else {
      sum++;

      if (index + 1 === array.length) {
        if (sum > lastSum) {
          lastSum = sum;
          if (array.length % 2 === 0) {
            lastColor = item;
          } else {
            lastColor = array[index - 1];
          }
        }
      }

      color1 = array[index - 1];
      color2 = item;
    }
  }
});

console.log({ lastSum, lastColor });
