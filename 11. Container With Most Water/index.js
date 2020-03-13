let maxArea1 = function(height) {
  let current = 0;
  let largestArea = 0;
  let operations = 0;
  for (let i = 0; i < height.length; i++) {
    const leftWall = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const rightWall = height[j];
      current = Math.min(leftWall, rightWall) * (j - i);
      largestArea = current > largestArea ? current : largestArea;
      operations ++;
    }
  }
  return 'largest area = ' + largestArea + ' operations = ' + operations;
};

// console.log(maxArea1([1,8,6,2,5,4,8,3,7]));

let maxArea = function(height) {
  let currentArea = 0;
  let largestArea = 0;
  let operations = 0;
  let length = height.length;
  let leftIdx = 0, rightIdx = length - 1;
  while (rightIdx - leftIdx > 0) {
    currentArea = Math.min(height[leftIdx], height[rightIdx]) * (rightIdx - leftIdx);
    largestArea = Math.max(currentArea, largestArea);
    height[leftIdx] > height[rightIdx] ? rightIdx-- : leftIdx++;
    operations++;
  }
  return 'largest area = ' + largestArea + ' operations = ' + operations;
};

// console.log(maxArea([2,3,10,5,7,8,9]));

/*
I plan on using a 2 pointer model. The first pointer will point to the first wall and the second to the right side wall.
I will ignore any wall less than 2 in height
I will calculate the value of the second wall by the distance from the left wall * height

I am going to try a new approach where I will set the pointers to the center of the array. using a loop I will calculate the relative value of each
 */

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
//   Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.