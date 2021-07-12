const getMostFrequent = (arr) => {
  let active = 0;
  let lazy = 0;
  arr.map((item) => {
    if (item === 1 || item === 0) {
      return lazy++;
    } else {
      return active++;
    }
  });

  if (lazy > active) {
    return 'lazy';
  } else {
    return 'active';
  }
};

export default getMostFrequent;
