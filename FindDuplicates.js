var findDuplicate = function(nums) {
        let checker = 0;
    
        for(let i = 0; i < nums.length; i++){
          if((checker >> nums[i]) & 1){
            return nums[i]
          }
    
          checker |= 1 << nums[i];
        }
    };
    