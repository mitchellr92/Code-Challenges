// Function that takes in two arrays and compares each corresponding index. When an index value is greater than the other, a point is awarded to the corresponding point tracker. When all comparisons are done, an array with the final scores is returned.

function compareTriplets(a, b) {

  // Initialize point trackers for a and b arrays along with an empty array for the final score.
  let aPoints = 0;
  let bPoints = 0;
  let finalScore = [];

  // Loop through array a to start comparisons.
  for (let i = 0; i < a.length; i++) {
    // Loop through array b on every index of array a to check for matching indexes.
    for (let j = 0; j < b.length; j++) {
      // If indexes match, continue with comparison.
      if (i === j) {
        // If value of the index in a is greater than the value in the index in b, award point to point tracker for a.
        if (a[i] > b[j]) {
          aPoints = aPoints + 1;
        // If value of the index in b is greater than the value in the index in a, award point to point tracker for b.
        } else if (a[i] < b[j]) {
          bPoints = bPoints + 1;
        }
      }
    }
  }

  // When comparisons are done, push final scores to the finalScore array.
  finalScore.push(aPoints);
  finalScore.push(bPoints);

  // Return finalScore array.
  return finalScore;
}
