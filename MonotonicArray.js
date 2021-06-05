function isMonotonic(array) {
    if(array.length === 1 || array.length === 0 ) return true;

    let increase = false;
  
    let startingPoint = 0;
    for(let i = 1; i < array.length; i++){
      if(array[i - 1] !== array[i]){
        if(array[0] < array[array.length - 1]){
          increase = true;
        }
        break;
      }
      startingPoint++;
    }
  
    for(let i = startingPoint + 1; i < array.length; i++){
      if(increase){
        if(array[i-1] > array[i]){
          return false;
        }
      } else {
        if(array[i-1] < array[i]){
          return false;
        }
      }
    }
    return true;
  }

  isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
