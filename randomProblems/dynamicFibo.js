const fib = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];

  let sum = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = sum;
  return sum;
};

const fibBottom = (n) => {
  if (n <= 2) return 1;
  let fibo = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
};

console.log(fib(100));
console.log(fibBottom(100));
