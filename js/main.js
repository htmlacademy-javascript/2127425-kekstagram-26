//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  if (min >= max) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checMaximumStringLength(checedStringLengths, maxString) {
  if (checedStringLengths.length <= maxString) {
    return true;
  }

  return false;
}

getRandomInt(1, 2);
checMaximumStringLength('xfghertgjhetrreh',25);
