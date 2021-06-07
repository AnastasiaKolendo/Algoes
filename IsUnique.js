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

console.log(isUnique('catt'))
console.log(isUnique('cat'))
console.log(isUnique(''))
console.log(isUnique('t'))