function uniteUnique(first,...others) {
  let newArr = first;
  for(let i = 0;i < others.length; i++) {
    for(let j = 0;j < others[i].length;j++) {
      //console.log(others[i][j])
      let toBePushed = others[i].filter(number => newArr.indexOf(number)===-1)
      if(toBePushed.length>0) {
          newArr = newArr.concat(toBePushed)
      }
    }
  }
  return newArr

}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
