// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

function isUnique(str){
    if(str.length > 128) return false;
    let obj = {}

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]){
            return false;
        } else {
            obj[str[i]] = 1;
        }
    }
    return true;
}

// console.log(isUnique('catt'))
// console.log(isUnique('cat'))
// console.log(isUnique(''))
// console.log(isUnique('t'))

//bit vector 

function isUniqueBitVector(str){
    let checker = 0;
    for(let i = 0; i < str.length; i++){
        let charValue = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if((checker & (1 << charValue)) > 0){
            return false;
        }
        checker |=  (1 << charValue);
    }
    return true;
}

console.log(isUniqueBitVector('catt'))
console.log(isUniqueBitVector('cat'))
console.log(isUniqueBitVector(''))
console.log(isUniqueBitVector('t'))