function palindrome(str) {

  str = str.toLowerCase()
           .split('')
           .filter(char => {
             if((char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)
             || ((char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57)))
             return char
  })
  console.log(str.join(''))
  //filtering done


}



palindrome("2_A3*3#A2");
