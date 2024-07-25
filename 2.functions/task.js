'use strict'
// задача 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i=0;i<arr.lenght;i++){
    sum=sum+arr[i];
    if (arr[i]<min){
      min=arr[i]
    } if (arr[i]>max){
      max=arr[i]
    }
    sum=sum+arr[i]
  }
  avg=Number((sum/arr.lenght).toFixed(2));

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
