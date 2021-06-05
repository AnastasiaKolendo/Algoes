var minSubArrayLen = function(target, nums) {
    let startInd = 0;
    let endInd = 0;
    let minSize = Infinity;
    let sum = 0;
    
    while(endInd < nums.length){
        sum += nums[endInd];
        
        while(sum >= target){
            let currWindow = endInd - startInd + 1;
            minSize = Math.min(minSize, currWindow);
            sum -= nums[startInd];
            startInd += 1
        }
        
        endInd += 1;
    }
    return minSize === Infinity ? 0 : minSize; 
};