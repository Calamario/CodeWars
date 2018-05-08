function abbrevName(name){
  let firstIn = name[0];
  let spacePlace = name.indexOf(' ');
  let secondIn = name[spacePlace + 1];
  let rtnIn = `${firstIn.toUpperCase()}.${secondIn.toUpperCase()}`;
  return rtnIn;
}