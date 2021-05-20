let memo = []
memo[0]=1;
memo[1]=1;
function sumFibs(num) {

  let i =2;

   do{

    memo[i]=memo[i-1]+memo[i-2];

  }while(memo[i++]<=num);

  memo.pop()

  memo = memo.filter(number => number%2!==0)

  return memo.reduce(function(sum,current) {
    return sum+=current;
  })
}

console.log(sumFibs(6));
