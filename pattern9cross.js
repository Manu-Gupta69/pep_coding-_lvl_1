for (let i = 1; i <= 5; i++) {
  let arr = [];
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      arr.push("*");
    } else {
      arr.push(" ");
    }
  }
  console.log(...arr);
}
