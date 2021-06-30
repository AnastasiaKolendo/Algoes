function getDifferentNumber(arr) {
    let set = new Set();

    for(let i = 0; i < arr.length; i++){
      set.add(arr[i])
    }

    for(let i = 0; i < arr.length; i++){
        if(!set.has(i + 1)){
            return i + 1
        }
    }

    return 0;
  }

  console.log(getDifferentNumber([10, 1, 12, 10, 13, 14]))

  function getDifferentNumber2(arr) {
   
    let result = Array(arr);
    result.sort((a, b) => a - b)
  
    for(let i = 0; i < result.length; i++){
      if(i != result[i]){
          return i;
      }
    }
    
    return 0;
  }

  console.log(getDifferentNumber([0, 1, 2, 3]))
  