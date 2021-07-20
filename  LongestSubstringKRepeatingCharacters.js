function longestSubstring(s,k){
    
    return helper(s, k, 0, s.length);
      
  }
  function helper(s, k, start, end){
      if(s.length < k) return 0;
      
      const obj = {};
      
      for(let i = 0; i < s.length; i++){
          if(obj[s[i]]){
              obj[s[i]]++;
          } else {
              obj[s[i]] = 1;
          }
      }
      
      for(let mid = start; mid < end; mid++){
          if(obj[s[mid]] >= k){
              continue;
          }
          
          let nextMid = mid + 1;
          
          while(nextMid < end && obj[s[mid]] < k){
              nextMid++;
          }
          return Math.max(helper(s, k, start, mid), helper(s, k, nextMid, mid))
      }
      return (end - start)
  }

  console.log(longestSubstring("aaabb", 3))