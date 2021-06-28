function digitDiagrams(a){
    let count =  0;

    for(let i = 0; i < a.length; i++){
        let digitArr = String(a[i]).split('')
        a[i] = digitArr.sort((a, b) => a -b).join('');
    }

    a = a.sort((b, c) => b - c);
    for(let i = 1; i < a.length -1; i++){
        if(a[i] === a[i - 1]){
            count++;
        }
    }
    return count++;
}


console.log(digitDiagrams([25, 35, 872, 228, 53, 278, 872, 728]))
// count = 0
// mydict = defaultdict(list)
// for i in range(len(b)):
//     sn = "".join(sorted(str(b[i])))
//     mydict[sn].append(b[i])

// for k in mydict:
//     n = len(mydict[k])
//     if n>=2:
//         paircombinations = math.factorial(n)//(2*(math.factorial(n-2)))
//         count += paircombinations

// print(count)