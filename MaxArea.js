var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    
    while(left < right){
        let minVal = Math.min(height[left], height[right]);
        let minRes = minVal * (right - left);
        if(minRes > result){
            result = minRes;
        }
        
        if(height[left] > height[right]){
            right--;
        } else {
            left++;
        }
    }
    return result;
};

console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
