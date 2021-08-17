function getShortestUniqueSubstring(arr, s) {
    let headIndex = 0
      let result = ""
      let uniqueCounter = 0
      const countMap = new Map();
  
     
      for (let i = 0; i < arr.length; i++){
          countMap.set(arr[i], 0)
      } 
  
      for (let tailIndex = 0; tailIndex < s.length; tailIndex++){
          let tailChar = s[tailIndex];
          
          if(!countMap.has(tailChar)){
             continue; 
          }
          
          let tailCount = countMap.get(tailChar);
          
          if(tailCount == 0){
              uniqueCounter++;
          }
          
          countMap.set(tailChar, tailCount + 1) //{'a' => 1}
         
          while(uniqueCounter === countMap.size){
             
              let tempLength = tailIndex - headIndex + 1;
              
              if (tempLength === arr.length){
                 
                  return s.substring(headIndex, tailIndex + 1)
              }
              
              if(result === '' || tempLength < result.length){
                  result = s.substring(headIndex, tailIndex + 1);
              }
              
              let headChar = s[headIndex];
              
              if(countMap.has(headChar)){
                  let headCount = countMap.get(headChar) - 1;
                  if(headCount === 0){
                      uniqueCounter--;
                  }
                  countMap.set(headChar, headCount);
              }
              
              headIndex++;
  
          }
      }
      return result;    
  }

  console.log(getShortestUniqueSubstring(['x', 'y', 'z'], "xyyzyzyx"))