function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcKeys = Object.keys(source);

  arr =  collection.filter(function(obj) {
        return srcKeys.every(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key]
        })

  })

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 },
{ "apple": 1, "bat": 2, "cookie": 2 }],
 { "apple": 1, "bat": 2 }));
