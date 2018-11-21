function countSum(arr,sum){ 

    var arr = [10 ,2 ,-2 ,-20 ,10];
    var sum = -10;
    var obj={};
    var count = 0;
    var cursum= 0;

    for(let i=0;i<arr.length;i++){
        cursum += arr[i];
        if(cursum == sum){
            count++;
        }
        if(obj.hasOwnProperty(cursum-sum)){
            count = count + obj[cursum-sum];
        }

        obj[cursum] =  obj.hasOwnProperty(cursum) ? obj[cursum]+1:1
    }

    return count;
}


console.log(countSum());