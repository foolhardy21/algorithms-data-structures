function spinalCase(str) {
   let spaceReg = new RegExp(/([a-z])([A-Z])/g)
   str = str.replace(spaceReg,'$1 $2')

   let nonWordReg = new RegExp(/\s+|_/g)
   return str.replace(nonWordReg,'-').toLowerCase()

}

console.log(spinalCase('The_Andy_Griffith_Show'));
