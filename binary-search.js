function binarySearch(arr, target) {
  if (!arr.length) return -1;
  arr.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    //change pointers
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 10, 4, 6], 10));
console.log(binarySearch([-5, 2, 10, 4, 6], 6));
console.log(binarySearch([-5, 2, 10, 4, 6], 20));
