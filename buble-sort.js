//Big O - O(n^2)
//asc order
function bubleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const arr = [8, 20, -2, 4, -6];
bubleSort(arr);
console.log(arr); //[-6, -2, 4 ,8, 20]
