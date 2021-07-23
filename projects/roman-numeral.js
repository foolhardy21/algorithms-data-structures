const convert = [
  {1: 'I'},
  {5: 'V'},
  {10: 'X'},
  {50: 'L'},
  {100: 'C'},
  {500: 'D'},
  {1000: 'M'}
]
function convertToRoman(num) {

  num = num.toString()
              .split('')
              .reverse()
              .map((digit,index) => {
                  if ( index*10 !== 0 ) {
                      return (digit*Math.pow(10,index)).toString()
                  } else {
                      return digit
                  }
              })
              .reverse()
  
  num = num.map(number => {
      
      if(number != 0) {
     
      let roman = ''
      let lt,gt
      const intnumber = parseInt(number)
      
      for(let i =0; i< convert.length; i++) {
           
          const key = parseInt(Object.keys( convert[i] ))
           if (key > intnumber) {
               gt = i
               lt = i-1
               break
           }
      }

      if( !lt && !gt  ) {
      
          lt = gt = convert.length-1
          const limit = number/parseInt( Object.keys(convert[lt]) )
          for(let i = 0; i < limit; i++) {

              roman += convert[lt][ Object.keys(convert[lt]) ]
          }

      } else {
          
          const diff1 = intnumber - parseInt( Object.keys( convert[lt] ) )
          const diff2 = parseInt( Object.keys( convert[gt] ) ) - intnumber 
          
          if( diff2.toString().split('')[0] != 1 ) {
              
              roman += convert[lt][ Object.keys(convert[lt]) ]
              let position
              for (let i = convert.length-1; i >= 0; i--) {
                  
                  const k = parseInt( Object.keys(convert[i]) )
                  if( diff1/k && k <= diff1) {
                  
                      position = i
                      break
                  }
              }
                      
              const limit = parseInt(diff1.toString().split('')[0])
              for(let i = 0; i < limit; i++) {

                  roman += convert[position][ Object.keys(convert[position]) ]
              }     

          } else {
              
              let position
              for (let i = convert.length-1; i >= 0; i--) {
                  
                  const k = parseInt( Object.keys(convert[i]) )
                  if( diff2/k && k <= diff2) {
                  
                      position = i
                      break
                  }
              }
              roman += convert[position][ Object.keys(convert[position]) ]

              roman += convert[gt][ Object.keys(convert[gt]) ]
              
          }
      }
              
      return roman

  }
  })

  console.log(num.join('')) 
 
}
 
convertToRoman(68);