function binarySearchRecursive(arr, target) {
  if (!arr.length) return -1;
  arr.sort((a, b) => a - b);
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(binarySearchRecursive([-5, 2, 10, 4, 6], 10));
console.log(binarySearchRecursive([-5, 2, 10, 4, 6], 6));
console.log(binarySearchRecursive([-5, 2, 10, 4, 6], 20));
