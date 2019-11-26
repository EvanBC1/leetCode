let majorityElement = function(nums) {
  let mapper = new Map();

  for ( let i = 0; i < nums.length; i++ ) {
    if (!mapper.get(nums[i])) {
      mapper.set(nums[i], 1);
    } else  {
      mapper.set(nums[i], mapper.get(nums[i]) + 1)
    }
    if (mapper.get(nums[i]) >= nums.length / 2 ) {
      return nums[i];
    }
  }
};

console.log(majorityElement([2,2,1,1,1,2,2]));

// Example 1:
//
// Input: [3,2,3]
// Output: 3
// Example 2:
//
// Input: [2,2,1,1,1,2,2]
// Output: 2