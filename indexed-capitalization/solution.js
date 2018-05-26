function capitalize(s,arr){
  for(let i = 0; i < arr.length; i++) {
    if(s.charAt(arr[i])) {
      s = s.slice(0, arr[i]) + 
      s.slice(arr[i], arr[i]+1).replace(s.charAt(arr[i]), s.charAt(arr[i]).toUpperCase()) + 
      s.slice(arr[i]+1);
    }
  }
  return s;
}