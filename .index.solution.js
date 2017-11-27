function map(array, fn) {
  return array.reduce(function(acc, el) {
    return acc.concat(fn(el));
  }, []);
}

function filter(array, fn) {
  return array.reduce(function(acc, el) {
    return fn(el) ? acc.concat(el) : acc;
  }, []);
}

function some(array, fn) {
  return array.reduce(function(acc, el) {
    return !acc ? fn(el) : true;
  }, false);
}

function every(array, fn) {
  return array.reduce(function(acc, el) {
    return acc ? fn(el) : false;
  }, true);
}

function join(array, string) {
  return array.reduce(function(acc, el, index, arr) {
    return acc + el + (index !== arr.length - 1 ? string : "");
  }, "");
}

module.exports = {
  map: map,
  filter: filter,
  some: some,
  every: every,
  join: join
};
