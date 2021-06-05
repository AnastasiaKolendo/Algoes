var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1
    
    let maxLength = 0;
    let cache = new Set()
    let pointer1 = 0;
    
    while(pointer1 < s.length){
        if(cache.has(s[pointer1])){
            if(s[pointer1 - 1] !== s[pointer1]){
                pointer1 = pointer1 - cache.size + 1
            }
            cache = new Set()
            cache.add(s[pointer1])
        } else {
            cache.add(s[pointer1]);
            maxLength = Math.max(cache.size, maxLength);
        }
        pointer1++
    }
    return maxLength
};