function countSum(arr,sum){ 

    var arr = [10,-10,5,5,8];
    var sum = 8;
    var obj={};
    var count = 0;
    var cursum= 0;

    for(let i=0;i<arr.length;i++){
        cursum = arr[i];
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