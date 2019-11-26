// button handlers
document.getElementById("nextStep").addEventListener("click", bubbleSort);
document.getElementById("previousStep").addEventListener("click", previousStep);
document.getElementById("autoSort").addEventListener("click", autoSort);
document.getElementById("stopAutoSort").addEventListener("click", stopAutoSort);

// global variables
let box = 25;
let sort;
let arr = [];
let arrLength = 0;
let steps = 0;
let savedArray = [];
let audio = new Audio('./assets/click.mp3');

// handle steps
let stepsOutput = document.getElementById("steps");
stepsOutput.innerHTML = steps;

// slider handler
let rangeSlider = document.getElementById("sliderRange");
let output = document.getElementById("value");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
  output.innerHTML = this.value;
  arrLength = this.value;
  generateArray(arrLength)
};

function generateArray (arrLength) {
  arr = [];
  for (let i = 0; i < arrLength; i++) {
    arr.push(i + 1);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  drawBars(arr);
}

function drawBars (arr, changedBar) {
  let c = document.getElementById("bubble");
  let ctx = c.getContext("2d");
  audio.play();

  ctx.clearRect(0, 0, 1200, 625);

  for (let i = 0; i < arr.length; i++) {
      ctx.strokeStyle = "blue";
      ctx.fillRect(box + (box * i * 2), box * 25, box, -box * arr[i]);
    }
}

// Sorter
function bubbleSort() {
  let sorted = false;
  let sorts = 0;

  while(!sorted) {
    sorts = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      steps ++;
      stepsOutput.innerHTML = steps;
      console.log(i);
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        drawBars(arr);
        sorts ++;
        // savedArray.push(arr);
        // console.log(savedArray);
        return;
      }
    }
    if (sorts === 0) {
      sorted = true;
    }
  }
  clearInterval(sort);
}

function previousStep() {
  arr = savedArray[2];
  drawBars(arr);

}

function autoSort() {
  sort = setInterval(bubbleSort, 200);
}

function stopAutoSort() {
  console.log('stop');
  clearInterval(sort);
}
generateArray(12);

