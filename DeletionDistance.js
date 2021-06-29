function deletionDistance(str1, str2) {
    let str1Len = str1.length;
    let str2Len = str2.length;
    
    const memo = Array(str1Len + 1).fill(0).map(() => Array(str2Len + 1).fill(0));

    for (let i = 1; i <= str1Len; i++){
        for (let j = 1; j <= str2Len; j++){
            if(str1.charAt(i - 1) === str2.charAt(j - 1)){
                memo[i][j] = 1 + memo[i-1][j-1];// found a character
            } else {
                memo[i][j] = Math.max(memo[i][j-1], memo[i-1][j]);
            }
        }
    }
    console.log(memo)
    return str1Len + str2Len - memo[str1Len][str2Len] * 2;
  }

  console.log(deletionDistance('heat', 'hit'))