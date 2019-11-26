let isAnagram = function(s, t) {
  let hash = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for ( let i = 0; i < s.length; i++) {
    if (!hash.get(s[i])) {
      hash.set(s[i], 1);
    } else {
      hash.set(s[i], hash.get(s[i]) + 1)
    }
  }
  for ( let i = 0; i < t.length; i++) {
    if (hash.get(t[i]) > 0) {
      hash.set(t[i], hash.get(t[i]) - 1)
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('ab', 'a'));
// Given two strings s and t , write a function to determine if t is an anagram of s.
//
//   Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
// Note:
//   You may assume the string contains only lowercase alphabets.
//
//   Follow up:
//   What if the inputs contain unicode characters? How would you adapt your solution to such case?