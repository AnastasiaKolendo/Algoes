function alternatingSorting(arr){
    let result = [];
    let count = 0;

    result[0] = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(i % 2 === 1){
            count++
            result[i] = arr[arr.length - count];
        } else {
            result[i] = arr[i/2];
        }
        
    }
    return result;
}

console.log(alternatingSorting([1,4,6,5,3]))