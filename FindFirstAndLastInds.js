var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if(nums.length === 1 && target === nums[0]) return [0, 0]

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        if(nums[middle] === target){
            return findStartAndEnd(nums, middle);
        } else if(nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return [-1, -1];
};

function findStartAndEnd(nums, middle){
    
    let target = nums[middle];

    let a = 0;
    for(let i = middle - 1; i >= 0; i--){
        if(nums[i] !== target){
            a = i + 1;
            break;
        }
    }   
    
    let b = nums.length - 1;
    for(let i = middle + 1; i < nums.length; i++){
        if(nums[i] !== target){
            b = i - 1;
            break;
        }
    }
    
    return [a, b];
}