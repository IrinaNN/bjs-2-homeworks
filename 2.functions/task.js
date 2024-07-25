'use strict'
// задача 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  let step=0;
  for (let i=0;i<arr.lenght;i++){
    if (arr[i]<min){
      min=arr[i]
    } else 
    if (arr[i]>max){
      max=arr[i]
    }
    sum=sum+arr[i]
    step=step+1;
  }
  avg = Number((sum/step).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// задача 2
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}
// задача 3
function makeWork (arrOfArr, func) {

}
