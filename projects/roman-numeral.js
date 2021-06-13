function convertToRoman(num) {

 const romanObj = {
   '1' : 'I',
   '5' : 'V',
   '10' : 'X',
   '50' : 'L',
   '100' : 'C',
   '500' : 'D',
   '1000' : 'M',
 }
 const numStr = num.toString()
 for(let i = 0; i < numStr.length; i++) {
   let digit = numStr[i]
   digit = digit.split('')

   let j = i
   while(j < numStr.length-1) {
     digit.push('0')
     j++
   }
   digit = digit.join('')
   console.log(digit)
 }
 // for(key in romanObj) {
 //   console.log(key)
 // }
}

convertToRoman(36);
