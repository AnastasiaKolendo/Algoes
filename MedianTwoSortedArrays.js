var findMedianSortedArrays = function(nums1, nums2) {
    let totalLen = nums1.length + nums2.length;
     
     let pointer1 = 0;
     let pointer2 = 0;
     
     let last = 0;
     let curr = 0;
     
     while(pointer1 + pointer2 <= Math.floor(totalLen / 2)){
         if(curr !== undefined){
             last = curr;
         }
         
         let elOne = nums1[pointer1];
         let elTwo = nums2[pointer2];
         
         if(elTwo  === undefined || elOne < elTwo){
             curr = elOne;
             pointer1++;
         } else {
             curr = elTwo;
             pointer2++;
             
         }
     }
     
     if(curr + last === 0) return 0;
     
     return totalLen % 2 === 0 ? Math.floor(last + curr) / 2 : curr;
 };


 console.log(findMedianSortedArrays([1, 3], [2]))
 console.log(findMedianSortedArrays([1, 2], [3, 4]))
 console.log(findMedianSortedArrays([0, 0], [0, 0]))