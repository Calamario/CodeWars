var gimme = function (inputArray) {
  let arr1 = inputArray.slice().sort((a,b) => a-b)
  for(let i = 0; i < inputArray.length; i++) {
    if(arr1[1]===inputArray[i]) {
      return i;
    }
  }
};