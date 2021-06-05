function twoNumberSum(array, targetSum) {
      let cache = {};
      let result = [];
      
      array.forEach(firstElement => {
          let secondElement = targetSum - firstElement
          if(cache[firstElement]){
              result.push(firstElement)
              result.push(secondElement)
          } else if(!cache[firstElement]){
              cache[secondElement] = 1
          } 
      })
      return result
  }
  
  