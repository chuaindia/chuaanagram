module.exports = function (str1, str2) {
  // write your code here
let by = 0;
let x = str1.toLowerCase()
    y = x.replace(/[^a-zA-Z0-9]/g, '')
    ascii1 = [];
    for (i=0; i<y.length; i++) {
      ascii1.push(y.charCodeAt([i]))
    }
let sorted1 = ascii1.sort()
let a = str2.toLowerCase()
    b = a.replace(/[^a-zA-Z0-9]/g, '')
    ascii2 = [];
    for (i=0; i<y.length; i++) {
      ascii2.push(b.charCodeAt([i]))
    }
let sorted2 = ascii2.sort()
for (i=0; i<y.length; i++) {
  if (ascii1[i] != ascii2[i]) {
    by--
  } else {
    by++
  }
}
if ((by === y.length) && (by === b.length)) {
  return true
} else {
  return false
}
}
