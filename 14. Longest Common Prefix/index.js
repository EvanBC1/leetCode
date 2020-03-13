let longestCommonPrefix = function(strs) {
  let output = '';
  for (let i = 0; i < strs[0].length; i++) {
    let matches = 0;
    for (let j = 1; j < strs.length; j++) {
      if(strs[0][i] === strs [j][i]) {
        matches ++;
      }
    }
    if (matches === strs.length - 1) {
      output += strs[0][i]
    } else {
      return output;
    }
  }
  return output;
};

console.log(longestCommonPrefix(["dog","racecar","car"]));

// 14. Longest Common Prefix
// Easy
//
// Write a function to find the longest common prefix string amongst an array of strings.
//
//   If there is no common prefix, return an empty string "".
//
//   Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//   Note:
//
// All given inputs are in lowercase letters a-z.
