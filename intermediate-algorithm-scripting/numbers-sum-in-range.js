function sumAll(arr) {
  let start = Math.min(...arr);
  let end= Math.max(...arr);

  let endSum = (end-start+1)/2*(2*start + end-start)

  return endSum;
}

console.log(sumAll([5, 10]));
