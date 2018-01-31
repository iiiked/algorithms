export default function fizzbuzz(array) {
  if (!Array.isArray(array)) return array;
  return array.map(num => {
    return num = num === 0 ? num :
      num % 15 === 0 ? 'fizzbuzz' :
      num % 5 === 0 ? 'buzz' :
      num % 3 === 0 ? 'fizz' : num; 
  });
}