function Smallestsubarray(arr,n,sum){
    var min_length = n+1;
    var start=0,end=0,currsum=0;
    while(end<n){
      while(currsum<sum && end<n){
        currsum +=arr[end++];
      }
      while(currsum>=sum && start<n){
            if(end-start<min_length){
              min_length = end-start;
            }
         currsum -=arr[start++];
      }
     
    }
    return min_length;
  }
  var arr = [1,2,10,40,50];
  var sum = 50;
  console.log(Smallestsubarray(arr,arr.length,sum));