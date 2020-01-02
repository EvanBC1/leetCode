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

let twoSum = function(nums, target) {
  let hash = new Map;
  for (let i = 0; i < nums.length; i++) {
      hash.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.get(complement) !== i && hash.get(complement)) {
      return [i, hash.get(complement)]
    }
  }
};

console.log(twoSum([1,3,4,2],6));