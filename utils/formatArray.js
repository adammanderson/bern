const formatArray = (arr, word = 'and') => {
  let outStr = '';
  if (arr.length === 1) {
    outStr = arr[0];
  } else if (arr.length === 2) {
    outStr = arr.join(' and ');
  } else if (arr.length > 2) {
    outStr = `${arr.slice(0, -1).join(', ')}, ${word} ${arr.slice(-1)}`;
  }
  return outStr;
}

export default formatArray;
