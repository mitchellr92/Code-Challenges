// Function that takes in an array and calculates that sum of the elements within the array.

function aVeryBigSum(ar) {

  // Initialize sum variable.
  let sum = 0;

  // Loop through array.
  for (let i = 0; i < ar.length; i++) {

    // Add current index to sum variable.
    sum = sum + ar[i];
  }

  // When loop is finished running, return sum variable.
  return sum;
}
