function high(x){
  let highestIndex = x.split(' ')
    .map(element => element.split('')
      .map(char => char.charCodeAt() - 96 )
      .reduce((prevAns,current) => (current + prevAns), 0))
    .reduce((iMax, x, j, arr) => x > arr[iMax] ? j : iMax, 0);
  return x.split(' ')[highestIndex];
}