function toCamelCase(str){
  str = str.replace(/\_([a-z])|-([a-z])/gi, function($1) {
    return $1.toUpperCase();
  })
  console.log(str)
  return str.replace(/\_?-?/g, '')
}