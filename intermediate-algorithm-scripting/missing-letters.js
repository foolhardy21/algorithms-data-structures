function fearNotLetter(str) {
  let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let strArr = str.split('');console.log(strArr)
  let collection = alphabets
                  .slice(alphabets.indexOf(strArr[0]),
                  alphabets.indexOf(strArr[strArr.length-1])); console.log(collection)
  let notFound = collection.filter(elem => strArr.indexOf(elem)===-1); console.log(notFound)
  return notFound.length>0 ? notFound.join('') : undefined
}

console.log(fearNotLetter("stvwx"));
