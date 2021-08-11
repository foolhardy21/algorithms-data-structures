function rot13(str) {
    let newstr = []
    for(let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)
        if ( ascii <= 90 && ascii >= 65) {
            ascii += 13
            if (ascii > 90) {
                ascii -= 90
                ascii += 64
            } 
        }
        newstr.push(String.fromCharCode(ascii))
    }
    console.log(newstr.join(''))  
  }
  
  rot13("SERR PBQR PNZC");