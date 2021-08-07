var wordBreak = function(s, wordDict) {
    if(wordDict.length === 0 || s.length === 0) return false;
    const set = new Set(wordDict);
    
    const visited = new Set();
    
    const q = [0];
    
    while(q.length > 0){
        const start = q.pop();
        
        if(!visited.has(start)){
            for(let end = start + 1; end <= s.length; end++){
                if(set.has(s.slice(start, end))){
                    
                    if(end === s.length){
                        return true;
                    }
                    q.push(end)
                }
            }
            visited.add(start);
        }
    }
    return false;
};