// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size n.

function staircase(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = ' ';
  }

  arr = arr.join('')

  let counter = 1;
  for (let i = 0; i < n; i++) {
    arr = arr.split('');
    arr[n - counter] = '#';
    counter++;
    arr = arr.join('')
    console.log(arr)
  }
}