// Represent Graph Adjacency Matrix given the array of directional edges

export default function graphEdgesToMatrix(array) {
  // Find out number of vertices (nodes)
  let n = new Set([].concat(...array)).size;

  // Generate zero-filled matrix (2-dimentional array)
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(Array(n).fill(0));
  }

  // Iterate through given array and add edges
  array.forEach(([x, y]) => matrix[x - 1][y - 1] = 1);

  return matrix;
}