function pancakeSort(arr) {
    // your code goes here
    let highest = arr[arr.length - 1];
    let ind = arr.length - 1;
    
    
    for(let i = arr.length - 1; i >= 0; i--){
      let subArr = arr.slice(0, i + 1)
      let max = Math.max(...subArr);
      
      let ind = arr.indexOf(max);
      if(ind !== i){
        flip(arr, ind);
        flip(arr, i);
      }
    }
    return arr;  
  }
  
  function flip(arr, k){
    for(let i = 0; i < k; i++){
      let curr = arr[i];
      arr[i] = arr[k - i];
      arr[k - i] = curr;
    }
  }