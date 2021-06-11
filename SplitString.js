

function splitString(str){
    let len = str.length;
            let count = 0;
            for (let i = 1; i <= len - 2; i++) {
                for (let j = i + 1; j <= len - 1; j++) {
                    let ab = str.substring(0, j); 
                    console.log(ab, 'ab')
                    let bc = str.substring(i, len);
                    console.log(bc, 'bc')
                    let ca = str.substring(j, len) + str.substring(0, i); 
                    console.log(ca, 'ca')
                    if (ab !== bc || bc === ca || ca === ab) {
                        count++;
                    }
                }
            }
            return count;
}

console.log(splitString('xzxzx'))