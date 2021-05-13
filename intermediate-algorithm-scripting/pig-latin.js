function translatePigLatin(str) {
  let strArr = str.split('')
  let vowels = ['a','e','i','o','u']
  let pos = -1;

  for(let i = 0; i < strArr.length; i++) {
    if(vowels.indexOf(strArr[i]) === -1) pos=i;
    else if(vowels.indexOf(strArr[i]) !== -1) break;
  }
  if(pos===-1) return str+'way';
  else {
    strArr.push(strArr.slice(0,pos+1).join('')+'ay');
    strArr.splice(0,pos+1);
    return strArr.join('')
  }
}

console.log(translatePigLatin("schwartz"));
