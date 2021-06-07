// Check Permutation: 
// Given two strings, write a method to decide if one is a permutation of the other.
function isPermutation(str1, str2){
    let obj1 = {};

    for(let i = 0; i < str1.length; i++){
        if(obj1[str1[i]]){
            obj1[str1[i]]++
        } else {
            obj1[str1[i]] = 1
        }
    }
    let obj2 = {}

    for(let i = 0; i < str2.length; i++){
        if(obj2[str2[i]]){
            obj2[str2[i]]++
        } else {
            obj2[str2[i]] = 1
        }
    }
    for (let key in obj1) {
       if(obj2[key] !== obj1[key]){
        return false
       }
    }
    
    return true
}


console.log(isPermutation('catct', 'tacc'))