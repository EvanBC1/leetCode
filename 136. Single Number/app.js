'use strict';

function singleNumber(nums) {
  const hash = new Map;

  nums.forEach(value => {
    if(hash.get(value) === true) {
      hash.delete(value);
    } else {
      hash.set(value, true);
    }
  });
  return hash.keys().next().value;
}

console.log(singleNumber([4,1,2,1,2]));

// Input: [4,1,2,1,2]
// Output: 4