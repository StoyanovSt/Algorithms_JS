//O(n)
function factorial(n) {
  if (n < 2) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

//O(n)
function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
