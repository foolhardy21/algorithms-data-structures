function myReplace(str, before, after) {

  let strArr = str.split(' ');

  let origChar = strArr[strArr.indexOf(before)].charAt(0)
  if(origChar === origChar.toLowerCase()) {
      return str.replace(before,after.toLowerCase());
    } else {
      after = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
      return str.replace(before,after)
    }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
