let containsDuplicate = function(nums) {
  let hash = new Map();
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    counter ++;

    if (hash.get(nums[i])) {
      return true;
    }
    if (!hash.get(nums[i])) {
      hash.set(nums[i], true)
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,4]));

// Example 1:
//
// Input: [1,2,3,1]
// Output: true
// Example 2:
//
// Input: [1,2,3,4]
// Output: false
// Example 3:
//
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true