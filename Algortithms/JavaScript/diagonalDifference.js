// Given a square matrix, calculate the absolute difference the sums of its diagonals

function diagonalDifference(arr) {
  let incrementer = 0;
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][incrementer])
    firstSum += arr[i][incrementer];
    incrementer += 1;
  }
  console.log(firstSum)

  incrementer = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i][incrementer])
    secondSum += arr[i][incrementer];
    incrementer += 1;
  }

  let total = Math.abs(firstSum - secondSum);

  return total;

}