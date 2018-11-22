const findsecond = (arr) =>{
    var obj = {};
    var first = 0,second=0;
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]]+1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    first = Object.keys(obj)[0];
    second = Object.keys(obj)[1];
    for(var key in obj){
        if(obj[key]>obj[first]){
            second = first;
            first = key;
        }
        else if(obj[key]>obj[second] && obj[key]!=obj[first]){
            second = key;
        }
    }
    return second;
}

var str = "abababb";
//var str = "abcd";
console.log("Second MF Charater is : ",findsecond(str));