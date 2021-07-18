var isAlienSorted = function(words, order) {
    for(let i = 1; i < words.length; i++){
        let word2 = words[i];
        let word1 = words[i - 1];
        
        
        let pointer1 = 0;
        let pointer2 = 0;
        let flag = false;
        
        while(pointer1 < word1.length && pointer2 < word2.length){
        
            let indWord1 = order.indexOf(word1[pointer1]);
           
            let indWord2 = order.indexOf(word2[pointer2]);
              
            if(indWord2 < indWord1){
                return false;
            } else if (indWord2 > indWord1){
                flag = true;
                break;
            } else {
                pointer1++;
                pointer2++;
            }
        }
        if(!flag && pointer1 < word1.length){
            return false;
        }
        
    }
    
    return true;
};


console.log(isAlienSorted(["aa","a"], "abqwertyuioplkjhgfdszxcvnm"));
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
