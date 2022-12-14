let cant = 0;
const res = [];
for (let index = 11098; index <= 98123; index++) {
  const item = index.toString().split("");

  //Verificar si tiene como minimo 2 veces el 5
  const five = item.filter((item) => {
    return item === "5";
  });

  if (five.length >= 2) {
    // let num1 = item[0];
    let val1 = true;
    item.forEach((element, index, array) => {
      if (index > 0 && element < array[index - 1]) {
        val1 = false;
      }
    });

    if (val1) {
      cant++;
      res.push(index);
    }
  }
}

console.log({ cant, res: res[55] });
