module.exports = function check(str, bracketsConfig) {
  let array = [];

  if(str.length%2 == 1){
    return false;
  }

  for(i=0; i<str.length; i++){

    for(j=0; j<bracketsConfig.length; j++){

      if(str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]){
        array.push(str[i]);
      } else if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] != bracketsConfig[j][1]){

        if(array.length == 0 || array[array.length-1] != bracketsConfig[j][0]){
          return false;
        } else{
          array.pop();
        }
      }

      if(str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]){
        if(array[array.length-1] == bracketsConfig[j][0]){
          array.pop();
        }else{
          array.push(str[i]);
        }
      }
    }
  }

  return array.length == 0 ? true : false;
}
