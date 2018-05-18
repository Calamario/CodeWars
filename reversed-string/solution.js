function solution(str){
  let rtnArr = [];
  str.split('').forEach(element => rtnArr.unshift(element))
  return rtnArr.join('');
}