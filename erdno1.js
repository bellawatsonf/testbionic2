let n = 4;
let temp = "12345678";
let result = "";
let k = 1;
let l = 2;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < temp.length; j++) {
    if (j === k) {
      result += "*";
    } else if (j === l) {
      result += "*";
    } else {
      result += temp[j];
    }
  }

  k++;
  l++;
  console.log(result);
  result = "";
}
