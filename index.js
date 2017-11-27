// in this morning challenge you are going to be recreating array methods using
// reduce. The only array methods you are allowed to use in this challenge are
// reduce and concat.
// no for loops, no while loops, no for in. The only way arrays can be iterated
// over is reduce, and concat is allowed as it's necessary for at least one of // the solutions.

// the intention is that from this morning challenge you will understand how
// reduce works, and, by recreating already existing array methods with reduce
// you will understand those as well.

// if you need help understanding how reduce works, you can check out the
// mdn article on it:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Array.prototype.map
// Research online what Array.prototype.map does!

// your version of map will take an array as the first argument, and a function
// as the second argument, returning a new array, in the same manner as
// Array.prototype.map would.

// if you want more clues on how your functions should work, look at the tests.

function map(array, fn) {
  //your code here
}

// Array.prototype.filter
// Research online what Array.prototype.filter does!

// your version of filter will take an array as the first argument, and a
// function as the second argument, returning a new array in the same manner as
// Array.prototype.filter would

function filter(array, fn) {
  //your code here
}

// Array.prototype.some
// research online to understand what Array.prototype.some does!

// your version will take an array as the first argument, and a function as the
// second argument, and return a boolean in the same was Array.prototype.some
// would

function some(array, fn) {
  //your code here
}

// Array.prototype.every
// research online to understand what Array.prototype.every does!

// your version will take an array as the first argument, and a function as the
// second argument, and return a boolean in the same was Array.prototype.every
// would

function every(array, fn) {
  //your code here
}

// Array.prototype.join
// research online to understand what Array.prototype.join does!

// your version will take an array as the first argument, and a string as the
// second argument, and return a string in the same way Array.prototype.join
// would

function join(array, string) {
  //your code here
}

module.exports = {
  map: map,
  filter: filter,
  some: some,
  every: every,
  join: join
};
