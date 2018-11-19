var str = "abcbefc";
var obj={};
for(var i =0; i<str.length;i++){
    if(obj[str.charAt(i)]){
        obj[str.charAt(i)] = obj[str.charAt(i)]+1;
    }
    else{
        obj[str.charAt(i)] = 1;
    }
}
var repeated,nonrepeated;
for(key in obj){
    if(nonrepeated && repeated) break;
    if(obj[key]==1 && !nonrepeated){
        nonrepeated = key;
        console.log("First Non Repeating Character is :",nonrepeated)
   }
  else if(obj[key]>1 && !repeated){
        repeated = key;
        console.log("First  Repeating Character is :",repeated)
   }
}
console.log(obj);







