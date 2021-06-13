var trap = function(height) {
    let leftToRight = [];
     let maxHeight = height[0]
     leftToRight[0] = maxHeight;
     
     for(let i = 1; i < height.length; i++){
         if(height[i] > maxHeight){
             maxHeight = height[i];
         }
         leftToRight[i] = maxHeight
     }
     
     let rightToLeft = [];
     
     maxHeight = height[height.length - 1]
     rightToLeft[height.length - 1] = height[height.length - 1];
     
     for(let i = height.length - 1; i >= 0; i--){
         if(height[i] > maxHeight){
             maxHeight = height[i];
         }
         rightToLeft[i] = maxHeight
     }
     
     let ans = 0;
     
     for(let i = 0; i < height.length ; i++){
         let min = Math.min(leftToRight[i], rightToLeft[i])
         
         ans += min - height[i]
     }
     return ans
     
 };