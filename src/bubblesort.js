export default function bubbleSort(arr) {
  // function that will swap 2 elements from given index
  const swap = index => {
    arr.splice(index, 2, arr[index + 1], arr[index]);
  };

  // cache array length
  const l = arr.length;

  for (let i = l - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      arr[j] > arr[j + 1] && swap(j);
    }
  }

  return arr;
}