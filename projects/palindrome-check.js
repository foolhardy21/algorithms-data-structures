function palindrome(str) {

  str = str.toLowerCase()
           .split('')
           .filter(char => {
             if((char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)
             || ((char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57)))
             return char
           })
           .join('')
  //filtering done
  const reverseStr = str.split('').reverse().join('')
  return (str.includes(reverseStr)) ? true : false
}



palindrome("2_A3*3#A2");
