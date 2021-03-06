function map(array, fn) {
  return array.reduce(function(acc, current) {
    return acc.concat(fn(current));
  }, []);
}

function filter(array, fn) {
  return array.reduce(function(acc, current) {
    return fn(current) ? acc.concat(current) : acc;
  }, []);
}

function some(array, fn) {
  return array.reduce(function(acc, current) {
    return acc || fn(current);
  }, false);
}

function every(array, fn) {
  return array.reduce(function(acc, current) {
    return acc && fn(current);
  }, true);
}

function join(array, string) {
  return array.reduce(function(acc, current) {
    return acc + string + current;
  });
}

function filterMap(filterFn, mapFn, array) {
  return array.reduce(function(acc, el) {
    return filterFn(el) ? acc.concat(mapFn(el)) : acc;
  }, []);
}

module.exports = {
  map: map,
  filter: filter,
  some: some,
  every: every,
  join: join,
  filterMap: filterMap
};
