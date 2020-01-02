let twoSum2 = function(nums, target) {
  if (nums.length < 2) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let val1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let val2 = nums[j];
      if (val1 + val2 === target) {
        return [i, j];
      }
    }
  }
};

// let twoSum = function(nums, target) {
//   let hash = new Map;
//   for (let i = 0)
//
// };

console.log(twoSum([2,4,3,5,3],9));