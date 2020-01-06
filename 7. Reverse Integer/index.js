let reverse = function(x) {
  let y = x.toString();
  let z = '';
  for (let i = 0; i < y.length; i++) {
    z += y.charAt(y.length - i - 1)
  }
  if (x < 0) {
    x = -parseInt(z)
  } else {
    x = parseInt(z);
  }
  if(x > (Math.pow(2,31) -1) || x < Math.pow(-2,31)) {
    return 0
  }
  return x;
};

console.log(reverse(1534236469));

// Given a 32-bit signed integer, reverse digits of an integer.
//
//   Example 1:
//
// Input: 123
// Output: 321
//
// Example 2:
//
// Input: -123
// Output: -321
//
// Example 3:
//
// Input: 120
// Output: 21
//
// Note:
//   Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
