// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
  let positiveInts = 0;
  let negativeInts = 0;
  let zeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveInts += 1;
    } else if (arr[i] < 0) {
      negativeInts += 1;
    } else {
      zeroes += 1;
    }
  }

  positiveInts /= arr.length;
  negativeInts /= arr.length;
  zeroes /= arr.length;

  positiveInts = positiveInts.toFixed(6)
  negativeInts = negativeInts.toFixed(6)
  zeroes = zeroes.toFixed(6)

  let newArr = [positiveInts, negativeInts, zeroes]

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
  }
}