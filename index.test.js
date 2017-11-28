var test = require("tape");
var solution = require(process.argv[2] === "solution"
  ? "./.index.solution.js"
  : "./index.js");

var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersAndStrings = [1, 2, "3", "4"];
var fruits = ["apple", "banana", "orange", "tomato"];

function isEven(n) {
  return n % 2 === 0;
}
function addOne(n) {
  return n + 1;
}
function isString(n) {
  return typeof n === "string";
}
function isNumber(n) {
  return typeof n === "number";
}

test("tests map", function(t) {
  t.plan(1);
  var expected = numbersArr.map(addOne);
  var actual = solution.map(numbersArr, addOne);
  t.deepEqual(actual, expected, `actual: ${actual}, expected: ${expected}`);
  t.end();
});

test("tests filter", function(t) {
  t.plan(1);
  var expected = numbersArr.filter(isEven);
  var actual = solution.filter(numbersArr, isEven);
  t.deepEqual(actual, expected, `actual: ${actual}, expected: ${expected}`);
  t.end();
});

test("tests some", function(t) {
  t.plan(2);
  var expected = numbersAndStrings.some(isString);
  var actual = solution.some(numbersAndStrings, isString);
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  expected = numbersArr.some(isString);
  actual = solution.some(numbersArr, isString);
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  t.end();
});

test("tests every", function(t) {
  t.plan(2);
  var expected = numbersAndStrings.every(isString);
  var actual = solution.every(numbersAndStrings, isString);
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  expected = numbersArr.every(isNumber);
  actual = solution.every(numbersArr, isNumber);
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  t.end();
});

test("tests join", function(t) {
  t.plan(2);
  var expected = fruits.join(". ");
  var actual = solution.join(fruits, ". ");
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  expected = fruits.join("YES");
  actual = solution.join(fruits, "YES");
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`);
  t.end();
});
