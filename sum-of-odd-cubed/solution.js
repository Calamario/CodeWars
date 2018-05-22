function cubeOdd(arr) {

  let arr2 =  arr.filter(element => element%2 !== 0)
   .map(element => element * element * element)
   .reduce((a,b) => a + b, 0);
   
   return (isNaN(arr2) ? undefined : arr2)
}