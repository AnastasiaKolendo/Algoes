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

// int ways = 0;
//     for (int i = 0; i < a.length(); i++) {

//         if (Character.isDigit(a.charAt(i))) {

//             String s = a.substring(0, i) + a.substring(i + 1);

//             if (s.compareTo(b) < 0 || b.compareTo(s) < 0)
//                 ways++;

//         }
//     }
//     return ways;