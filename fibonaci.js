//O(n)
function fibonaci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

//O(2 power of n) 
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  //Fn = Fn-1 + Fn-2;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(6));
