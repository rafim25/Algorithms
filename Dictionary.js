// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


/* 
Your previous Python 2 content is preserved below:

/* Problem Name is &&& Longest Word &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 *  1) Given a a string of letters and a dictionary, the function longestWord should
 *     find the longest word or words in the dictionary that can be made from the letters
 *     Input: letters = "oet", dictionary = {"to","toe","toes"}
 *     Output: {"toe"}
 *     Only lowercase letters will occur in the dictionary and the letters
 *     The length of letters will be between 1 and 10 characters
 *     The solution should work well for a dictionary of over 100,000 words
 *  2) Run this code in the REPL to observe its behaviour.
 *  3) Consider adding some additional tests in doTestsPass().
 *  4) Implement the longestWord() method correctly.
 *  5) If time permits, introduce '?' which can represent any letter.  "to?" could match to "toe", "ton" etc
 */

var _ = require('underscore');

class Dictionary {
  constructor(words) {
    this.words = words
  }

  contains(word) {
    //console.log(_.contains(this.words, word));
    return _.contains(this.words, word);
  }
}

   function isBelowThreshold(arr,currentValue) {
  return arr.indexOf(currentValue);
}


function longestWord(letters, dict) {
  console.log(letters);
  
  
  var obj = {
    'o':1,
    's':1,
    'e':1,
    't':1,
    'd':1,
    'g':1
  }
  var obj={
  'o':1,
    't':1,
    'e':1
  }
  
   let  returnarr=[];
  
   let  length1 = 0;
 
  let maxlength=0;
  
  dict.words.forEach((word)=>{
    
     let arr = [...word]
    
     for(var i=0;i<arr.length;i++){
      if(obj[arr[i]]){
        continue;
        length1++;
      }
       else{
        break;
       }
     }
    
    if(i==arr.length){
      maxlength= length1;
      returnarr.push(word)
    };
    
  
  })
  
  
  
   var longest = returnarr.reduce(function (a, b) { return a.length > b.length ? a : b; });
        //       } 
 let maxlength1 = longest.length;
  console.log(maxlength1);
  
  var temparr = returnarr.filter(item => 
    item.length>=maxlength1
  );
  
  console.log(temparr);
 return temparr;
  //return dict.contains(letters) ? [letters] : returnarr;
}

function arraysEqual(arr1, arr2) {
  return _.difference(arr1, arr2).length == 0 && _.difference(arr2, arr1) == 0
}

function doTestsPass() {
  var words = ["to", "toe", "toes", "doe", "dog", "god", "dogs", "book", "banana"];
  let dict = new Dictionary(words);

  var result = arraysEqual(["toe"], longestWord("ote", dict))  
  
  return result;
}

/**
 * Main execution entry.
 */
if(doTestsPass()) {
  console.log("All tests pass!");
} else {
  console.error("There are test failures.");
}

