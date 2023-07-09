const {
  isEven,
  factorial,
  isPrime,
  fibonacci,
  gcd,
  power,
  isPalindrome,
  countChar,
  sumDigits,
  reverseString,
} = require("./exercises"); // Replace with your actual file name

describe("JavaScript basic exercises", () => {
  test("checks if a number is even", () => {
    expect(isEven(2)).toBeTruthy();
    expect(isEven(7)).toBeFalsy();
  });

  test("computes the factorial of a number", () => {
    expect(factorial(3)).toEqual(6);
    expect(factorial(5)).toEqual(120);
  });

  test("checks if a number is prime", () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(4)).toBeFalsy();
  });

  test("computes the nth number in the Fibonacci sequence", () => {
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(7)).toEqual(13);
  });

  test("finds the greatest common divisor of two numbers", () => {
    expect(gcd(12, 8)).toEqual(4);
    expect(gcd(7, 5)).toEqual(1);
  });

  test("computes the base raised to the power of the exponent", () => {
    expect(power(2, 3)).toEqual(8);
    expect(power(5, 4)).toEqual(625);
  });

  test("checks if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBeTruthy();
    expect(isPalindrome("hello")).toBeFalsy();
  });

  test("counts the number of times a character appears in a string", () => {
    expect(countChar("hello world", "l")).toEqual(3);
    expect(countChar("hello world", "z")).toEqual(0);
  });

  test("computes the sum of the digits of a number", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(456)).toEqual(15);
  });

  test("reverses a string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
  });
});
