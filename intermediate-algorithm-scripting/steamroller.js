let flatArray = []

function steamrollArray(arr) {

  arr.forEach(function(item) {
      let isArray = Array.isArray(item);
      //console.log(isArray)
      if(isArray) {
        steamrollArray(item);
      } else {
        flatArray.push(item)

      }

  })
return flatArray
}

console.log(steamrollArray([1, [], [3, [[4]]]]));
