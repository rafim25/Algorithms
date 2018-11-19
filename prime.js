function isPrime(num) {
    for(let i = 2; i < num; i++) 
      if(num % i === 0){
        return false;
      }else {
        return num > 1;
      }
   }


 const primecheck = (arr) =>{
    var comp = [];
    var arr = [2, 8, 5, 7, 9, 5, 7 ];
    for(let i=0; i<arr.length;i++){
        if(!isPrime(arr[i])){
            comp.push(i);
        }
    }
    var longdis = 0;
    var pos = 0;
   
    for(let i=0;i<comp.length-1;i++){
        var temp = (comp[i+1]-comp[i])+(comp[i+2]-comp[i+1]);
        if(temp>longdis){
            longdis = temp;
            pos = i+1;
        }
    }    

    return pos;
 }
 var arr = [3,6,5,7,4,13,15];
 console.log("the position to be remove",primecheck(arr));