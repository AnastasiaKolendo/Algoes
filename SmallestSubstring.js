function getShortestUniqueSubstring(arr, str) {
    // your code goes here
    let shortestSubstring = '';
    let obj = {};
    let count = 0;
    let startIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }

    for (let endInd = 0; endInd < str.length; endInd++) {

        let currCharacter = str[endInd];

        if (!obj.hasOwnProperty(currCharacter)) {
        }else {   

            if (obj[currCharacter] === 0) {
                count += 1
            }

            obj[currCharacter]++;

            while (count === arr.length) {

                let resultSubstring = str.substring(startIndex, endInd);
                
                if (shortestSubstring.length === 0) {
                    shortestSubstring = resultSubstring;
                } else {
                    if (resultSubstring.length < shortestSubstring.length && resultSubstring.length !== 0) {
                        shortestSubstring = resultSubstring
                    }
                }

                obj[str[startIndex]]--;


                if (obj[startIndex] == 0) {
                    count--;
                }
                startIndex++
            }
        } 
    }

    return shortestSubstring;
}

console.log(getShortestUniqueSubstring(['x', 'y', 'z'], "xyyzyzyx"))