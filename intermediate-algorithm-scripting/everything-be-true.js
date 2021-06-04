function truthCheck(collection, pre) {
  let truthy=true;

  for (let i in collection) {
    let object = collection[i];

    if(!object[pre]) {truthy=false;console.log(object[pre]);break;}

  }
  return truthy
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
