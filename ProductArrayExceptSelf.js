var productExceptSelf = function(nums) {
    let leftMultiply = [1];
    
    for (let i = 1; i < nums.length; i++){
        leftMultiply[i] = leftMultiply[i - 1] * nums[i - 1];
    }
    
    let rightMultiply = Array(nums.length).fill(0);
    rightMultiply[rightMultiply.length - 1] = 1;
    
    for (let i = nums.length - 2; i >= 0; i--){
        rightMultiply[i] = rightMultiply[i + 1] * nums[i + 1];
    }
    
    for(let i = 0; i < nums.length; i++){
        nums[i] = leftMultiply[i] * rightMultiply[i];
    }
    
    return nums;
};


console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))