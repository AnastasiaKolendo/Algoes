function removeDigit(a){
    let ways = 0;

    for(let i = 0; i < a.length; i++){
        if(isNaN(a[i] === false)){
            let s = a.substring(0, i) + a.substring(i + 1);
        }
        if(s < b){
            ways++;
        }
    }
    return ways;
}

console.log()
