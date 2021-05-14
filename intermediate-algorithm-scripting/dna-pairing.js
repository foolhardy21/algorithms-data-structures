function pairElement(str) {
  let basePair = {
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
  }
  let strArr = str.split('');
  strArr = strArr.map(function(elem) {
    return [elem,basePair[elem]]
  })
  return strArr;
}

console.log(pairElement("ATCGA"));
