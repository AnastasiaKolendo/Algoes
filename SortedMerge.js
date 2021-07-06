var merge = function(nums1, m, nums2, n) {
    n--;
    m--;
    
    let len = nums1.length - 1;
    
    while(m >= 0 && n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[len] = nums1[m];
            m--;
        } else {
             nums1[len] = nums2[n];
            n--;
        } 
        len--;
    }
};