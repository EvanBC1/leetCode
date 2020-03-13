function mergeTwoLists(l1, l2) {
  let newArray = [],
    longerArray = Math.max(l1.length, l2.length);

  for (let i = 0; i < longerArray; i++) {
    if (l1[i]) {
      newArray.push(l1[i]);
    }
    if (l2[i]) {
      newArray.push(l2[i]);
    }
  }
  return newArray;
}

console.log(mergeTwoLists([1,2,3], [1,3,5]));
console.log(mergeTwoLists([1,2,3,4], [1,2]));
console.log(mergeTwoLists([1,2,3], ['a','b','c']));
