function insertDash(num) {
  let numArr = (num.toString()).split('');
  for(let i = 0; i < numArr.length - 1; i++) {
   if(parseInt(numArr[i])%2 !== 0 && parseInt(numArr[i+1])%2 !== 0 ) {
      numArr[i] = (numArr[i] + '-');
    }
  }
  return numArr.join('');
}