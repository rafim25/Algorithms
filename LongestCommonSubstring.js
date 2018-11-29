function LongestCommonSubstring(str1,str2){
    var arr = [];
    var result = 0;
    for(let i=0;i<=str1.length;i++){
      arr[i] = [];
      for(let j=0;j<=str2.length;j++){
         arr[i][j] = 0;
      }
     
    }
    
    for(let i=1;i<=str1.length;i++){
      for(let j=1;j<=str2.length;j++){
        if(str1[i-1]== str2[j-1]){
            arr[i][j] = arr[i-1][j-1]+1;
        }
      }
    }
    
    for(let i=0;i<=str1.length;i++){
      for(let j=0;j<=str2.length;j++){
        if(arr[i][j] >result){
          result=arr[i][j];
        }
      }
    }
    //console.log(arr);
    return result;
  }
  
  var str1 = "67868abcdefghijkl67";
  var str2 = "abcdefghijkl67678678";
  
  console.log(LongestCommonSubstring(str1,str2));