var canReorderDoubled = function(arr) {
    arr.sort((a, b) => {
        return Math.abs(a) - Math.abs(b);
    });
    
    const map = new Map();
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        let curr = arr[i];
       
        if(!map.has(curr) || map.get(curr) === 0) continue;
        
        if(!map.has(curr * 2) || map.get(curr * 2) === 0) return false;
   
        map.set(curr, map.get(curr) - 1)
        map.set(curr * 2, map.get(curr * 2) - 1)
    }
    
    return true;
};