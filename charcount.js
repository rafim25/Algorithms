var str = "abcbefcaaaa";
var obj={};
for(var i =0; i<str.length;i++){
    if(obj[str.charAt(i)]){
        obj[str.charAt(i)] = obj[str.charAt(i)]+1;
    }
    else{
        obj[str.charAt(i)] = 1;
    }
}
console.log(obj);
//