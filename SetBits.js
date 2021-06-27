

function pairSetBit(arr){
    let count = 0;;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let arrINumOfBits = calculateBits(arr[i]);
            let arrJNumOfBits = calculateBits(arr[j]);
            if(arrINumOfBits === arrJNumOfBits && arrINumOfBits !== 1){
                count++;
            }
        }
    }
    return count;
}

function calculateBits (num) {
    let bits = 0;
    while(num > 0){
        if(num % 2 === 1) bits++
        num = Math.floor(num / 2);
    }

    return bits;
}

console.log(pairSetBit([6, 5, 1, 3, 7]))