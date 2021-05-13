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

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
