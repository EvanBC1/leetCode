var removeDuplicates = function(nums) {
  let length = nums.length;

  if (nums.length < 1) {
    return null;
  }

  for (let i = 0; i < length; i++) {
    if(nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
    if (!nums[i + 1]) {
      return nums;
    }
  }
  return nums
};

console.log(removeDuplicates([1,1,2]));