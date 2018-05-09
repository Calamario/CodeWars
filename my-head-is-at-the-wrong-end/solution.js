function fixTheMeerkat(arr) {
  const newArr = [];
  arr.forEach(function(part){
    newArr.unshift(part);
  });
  return newArr;
}

function fixTheMeerkat(arr) {
  return arr.reverse();
}