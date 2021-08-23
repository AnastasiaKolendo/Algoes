// var frequencySort = function(s) {
//     let obj = {};
    
//     for(let i = 0; i < s.length; i++){
//         if(obj[s[i]]){
//            obj[s[i]]++;
//         } else {
//             obj[s[i]] = 1;
//         }
//     }
    
//     let values = Object.values(obj);
//     values.sort((a, b) => b - a);
    
//     const result = [];
    
//     for(let val of values){
//         for(let key in obj){
//             if(obj[key] === val){
                
//                 while(val > 0){
//                     result.push(key);
//                     val--;
//                 }
//                 obj[key] = 0;
//             }
            
//         }
//     }
    
//     return result.join('');
// };

var frequencySort = function(s) {
    
    let array = s.split('').sort();
 
    let newArray = [];
    let prev = 0;
    
    for(let i = 0; i < array.length; i++){
        if(newArray.length === 0){
            newArray.push([array[i]]);
            
        } else {
           
            if(prev !== array[i]){
                newArray.push([array[i]])
            } else {
                let last = newArray[newArray.length - 1];
                last.push(array[i]);
                
            }
        }
        prev = array[i];
    }
   
    newArray.sort((a, b) => b.length - a.length);
    
    let result = [];
    
    for(let i = 0; i < newArray.length; i++){
        let curr = newArray[i];
        result.push(...curr);
    }
    
    return result.join('')
    
};