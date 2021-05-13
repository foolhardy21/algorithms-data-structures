function destroyer(arr,...remove) {
  return arr.filter(num => remove.indexOf(num)===-1)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
