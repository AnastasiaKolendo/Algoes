var search = function(nums, target) {
    let pivot = findPivot(nums);
    if(pivot === 0 || nums[0] > target){
        return binarySearch(pivot, nums.length - 1, target, nums);
        
    } else {
        return binarySearch(0, pivot, target, nums);
    }
};

function findPivot(nums){
    let left = 0; 
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] > nums[mid + 1]){
            return mid + 1;
        } else {
            if(nums[nums.length - 1] < nums[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return 0;
}

function binarySearch(left, right, target, nums){
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}