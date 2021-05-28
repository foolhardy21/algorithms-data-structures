function dropElements(arr, func) {
  let i =0;
  while(i < arr.length) {
    if(func(arr[i])===true) {
      console.log(func(arr[i]))
      break;
    }
    else {
      arr.splice(i,1)
      
    }
  }

  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
