/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    if(nums.length === 0 || k < 0) return 0
    let map = new Map();
    let result = 0;
    
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    map.forEach((val, key) => {
         if(k === 0){
            if(val > 1){
                result++;
            }       
        } else {
            if(map.has(key + k)){
                result++;
            }
        }
    })
        

    return result;
};

console.log(findPairs([3,1,4,1,5], 2))