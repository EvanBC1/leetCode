let maxArea = function(height) {
  let current = 0;
  let largest = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const leftWall = height[i];
      const rightWall = height[j];
      if (leftWall < rightWall) {
        current = leftWall * (j - i);
      } else {
        current = rightWall * (j - i);
      }
      console.log(leftWall + ' ' + rightWall + ' ' + current);
      largest = current > largest ? current : largest;
    }
  }
  return 'largest area = ' + largest;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

/*
I plan on using a 2 pointer model. The first pointer will point to the first wall and the second to the right side wall.
I will ignore any wall less than 2 in height
I will calculate the value of the second wall by the distance from the left wall * height
 */

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
//   Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.