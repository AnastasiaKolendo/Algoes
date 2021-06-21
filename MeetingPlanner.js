function meetingPlanner(slotsA, slotsB, dur) {
    let result = [];
    let i = 0;
    let j = 0;
  
  
    while (i < slotsA.length && j < slotsB.length) {
      let start = Math.max(slotsA[i][0],slotsB[j][0])
    
      let end = Math.min(slotsA[i][1],slotsB[j][1]);
      if (end - start >= dur) {
        return [start, start + dur];
      } else if(slotsA[i][1] < slotsB[j][1]) i++;
      else if(slotsA[i][1] > slotsB[j][1]) j++;
      else {
        i++;
        j++;
      }
      
    }
  
    return result;
  
  }
  
  console.log(meetingPlanner([[10,50],[60,120],[140,210]], [[0,15],[60,70]], 8))