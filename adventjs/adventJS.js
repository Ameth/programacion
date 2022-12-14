// const heights = [1, 2, 1];
const heights = [1];

function checkJump(heights) {
  let ctrl = 1;

  heights.forEach((item, index, array) => {
    if (array[index + 1] != "undefined") {
      if (array[index + 1] > item) {
        if (ctrl !== 1) {
          ctrl++;
        }
      } else if (array[index + 1] < item) {
        if (ctrl == 1) {
          ctrl++;
        }
      }
    }
  });

  return ctrl === 2 ? true : false;
}

console.log(checkJump(heights));
