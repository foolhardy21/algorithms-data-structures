function sumPrimes(num) {
  let isPrime = Array(num+1).fill(true);

  for(let i = 2; i < num; i++) {
    for(let j = i*i; j <= num; j++) {
      if(j%i==0) {
        isPrime[j]=false;
      }
    }
  }

  return isPrime.reduce(function(total,current,index) {
    return current ? total+=index : total;
  },0) - 1
}

console.log(sumPrimes(977));
