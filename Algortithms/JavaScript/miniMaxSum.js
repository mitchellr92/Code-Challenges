// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let largeInt = arr[0];
  let smallInt = arr[0];
  let maxSum = 0;
  let minSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeInt) {
      largeInt = arr[i]
    }

    if (arr[i] < smallInt) {
      smallInt = arr[i]
    }

    maxSum += arr[i];
    minSum += arr[i];
  }

  maxSum -= smallInt;
  minSum -= largeInt;

  console.log(minSum, maxSum)

}