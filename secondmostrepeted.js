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
    for(var key in obj){
        if(obj[key]>obj[first]){
            first = key;
            second = first;
        }
        else if(){

        }
    }
}