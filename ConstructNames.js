
// Give two Strings a and b find out if there is any possible to repalce the same frequency character
// Input: a = babczzz, b = abbzccc
// Output: true
// Explanation:
// In a string,
// a -> 1, b -> 2, c-> 1 , z -> 3
// In b string,
// a -> 1, b -> 2, c -> 3, z -> 1
// a and b are the same frequency.
// c and z have same frequency so they can replace to each other.
// So return true.

// Input: a = x, b = y
// Output: false
// Explain: Not the same character

// Input: a = ii, b = j
// Output: false

// The frequency of the two letters inside each string can also be interchanged, so this question only needs two strings. 
//Each frequqncy appears the
// same number of times. 
//For example, "babzccc" and "bbazzcz" return "true" because z and c can be interchanged. 
//But "babzcccm" and "bbazzczl" are different, because m appeared in the first one, and did not appear in the second.

function constructorNames(a, b){
    let map1 = {};
    let map2 = {};
    
    for(let i = 0; i < a.length; i++){
        if(!map1[a[i]]){
            map1[a[i]] = 1;
        } else {
            map1[a[i]]++;
        }
    }

    for(let i = 0; i < b.length; i++){
        if(!map2[b[i]]){
            map2[b[i]] = 1;
        } else {
            map2[b[i]]++;
        }
    }


    let keys1 = Object.keys(map1);
    let keys2 = Object.keys(map2);

    if(keys1.length !== keys2.length){
        return false;
    }


    let diff = {};

    for(let i = 0; i < keys1.length; i++){
        
        if(!map2[keys1[i]]){
            return false;
        } else {
            let val1 = map1[keys1[i]];
            let val2 = map2[keys1[i]];

            if(val1 != val2){
                if(diff[Math.abs(val1 - val2)]){
                    delete diff[Math.abs(val1 - val2)];
                } else{
                    diff[Math.abs(val1 - val2)] = 1
                }
            }
        }

    }
      return Object.keys(diff).length === 0;  
}

console.log(constructorNames('abbzccc', 'babczzz'))

