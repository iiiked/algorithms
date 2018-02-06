// Given an array of numbers, find a peak
// For example in array [a, b, c, d], a is a peak if a >= b and b is a peak if b >= a && b >= c and so on

// Straigth forward solution to check all numbers from the start has O(n) complexity and we might improve it with
// divide & conquer recursive algorithm to get O(log2n) complexity

export default function findPeak(array) {
  let n = array.length;
  let mid = Math.floor(n / 2);
  if (array[mid] < array[mid - 1]) return findPeak(array.slice(0, mid));
  if (array[mid] < array[mid + 1]) return findPeak(array.slice(mid));
  return array[mid];
};