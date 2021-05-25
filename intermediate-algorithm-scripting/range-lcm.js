function smallestCommons(arr) {

  let min = Math.min(...arr)
  let max = Math.max(...arr);
  arr = [];
  for(let i = min; i <= max; i++) {
    arr.push(i)
  }

  for(let i = 1; i<arr.length; i++) {
      let j=1;
      let smaller = Math.min(arr[i],arr[i-1]);
      let greater = Math.max(arr[i],arr[i-1]);
      while(j>=1) {
        if((greater*j)%smaller === 0) {
          arr[i] = greater*j;
          break;
        }
        j++;
      }
  }
  //console.log(arr)
  return arr[arr.length-1];
}


console.log(smallestCommons([1,5]));
