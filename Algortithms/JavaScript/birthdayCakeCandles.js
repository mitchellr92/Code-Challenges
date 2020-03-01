// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

function birthdayCakeCandles(ar) {
  let largestInt = ar[0];
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > largestInt) {
      largestInt = ar[i]
    }
  }

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === largestInt) {
      count += 1;
    }
  }

  return count
}