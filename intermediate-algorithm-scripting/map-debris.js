function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = Math.PI;
  
  for(let i = 0; i < arr.length; i++) {

    const obj = arr[i]
    const alt = obj.avgAlt

    const numerator = Math.pow(alt+earthRadius,3)
    const sqrt = Math.sqrt(numerator/GM)
    const time = Math.round(sqrt*2*pi)

    obj['orbitalPeriod'] = time
    delete obj.avgAlt

    arr[i] = obj

  }
  return arr
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}
, {name: "hubble", avgAlt: 556.7}
, {name: "moon", avgAlt: 378632.553}]);
