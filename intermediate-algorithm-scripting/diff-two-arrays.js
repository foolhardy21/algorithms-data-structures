function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(num => arr2.indexOf(num)===-1)
  let newArr2 = arr2.filter(num => arr1.indexOf(num)===-1)
  return newArr.concat(newArr2)
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]));
