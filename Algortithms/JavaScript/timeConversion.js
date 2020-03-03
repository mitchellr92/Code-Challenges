// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.



function timeConversion(s) {
  let arr = s.split("");

  if (arr[arr.length - 2] === "P") {
    arr.length = 8;

    if (arr[1] !== "2" || arr[0] === "0") {
      let hour = arr.slice(0, 2).join("");
      hour = parseInt(hour);
      hour += 12;
      hour = hour.toString().split("");

      for (let i = 0; i < 2; i++) {
        if (arr[i] === arr[0]) {
          arr[i] = hour[0];
        } else if (arr[i] === arr[1]) {
          arr[i] = hour[1];
        }
      }

      s = arr.join("");
    }

    s = arr.join("");
  }

  if (arr[arr.length - 2] === "A") {
    arr.length = 8;

    if (arr[1] === "2") {
      arr[1] = 0;
      arr[0] = 0;
    }

    s = arr.join("");
  }

  return s;
}
