// variables
document.getElementById("nextStep").addEventListener("click", bubbleSort);
document.getElementById("autoSort").addEventListener("click", autoSort);
document.getElementById("stopAutoSort").addEventListener("click", stopAutoSort);

let box = 50;
let sort;
let arr = [4,3,2,11,8,1,12,7,6,9,5,10];

function drawBars (arr, changedBar) {
  let c = document.getElementById("bubble");
  let ctx = c.getContext("2d");

  ctx.clearRect(0, 0, 1200, 800);

  for (let i = 0; i < arr.length; i++) {

    if (i === changedBar) {
      console.log(changedBar);
      ctx.strokeStyle = "black";
      ctx.strokeRect(box + (box * changedBar * 2), box * 16, box, -box * (arr[i]));
      // ctx.strokeStyle = "red";
      // ctx.strokeRect(box + (box * (changedBar + 1) * 2), box * 16, box, -box * arr[changedBar + 1]);

      ctx.strokeStyle = "black";
    } else {
      ctx.strokeRect(box + (box * i * 2), box * 16, box, -box * arr[i]);
    }
  }
}

// Sorter
function bubbleSort() {
  let sorted = false;
  let sorts = 0;

  while(!sorted) {
    sorts = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      drawBars(arr, arr[i]);
      if (arr[i] > arr[i + 1]) {
        sorts ++;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        return;
      }
    }
    if (sorts === 0) {
      sorted = true;
    }
  }
  // arr = [4,3,2,1]
  arr = [4,3,2,11,8,1,12,7,6,9,5,10];
}

function autoSort() {
  sort = setInterval(bubbleSort, 500);
}

function stopAutoSort() {
  console.log('stop');
  clearInterval(sort);
}

bubbleSort();
// setInterval( function () { bubbleSort(); }, 1000);
