function getCompleted(part, total) {
  return "1/1";
}

console.log(getCompleted("01:00:00", "03:00:00")); // "1/3"
console.log(getCompleted("02:00:00", "04:00:00")); // "1/2"
console.log(getCompleted("01:00:00", "01:00:00")); // "1/1"
console.log(getCompleted("00:10:00", "01:00:00")); // "1/6"
console.log(getCompleted("01:10:10", "03:30:30")); // "1/3"
console.log(getCompleted("02:20:20", "03:30:30")); // "2/3"
console.log(getCompleted("03:30:30", "05:50:50")); // "3/5"
