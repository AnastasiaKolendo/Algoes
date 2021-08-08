function decrypt(word) {
    if(word.length === 0) return ''
   
    let first = word.charCodeAt(0);
    let result = String.fromCharCode(first - 1);
   
    for(let i = 1; i < word.length; i++){
      let currChar = word[i];
      let asciiCode = currChar.charCodeAt(0);
      
      while(asciiCode < 97 + first ){
        asciiCode += 26;
      }
      result += String.fromCharCode(asciiCode - first);
      first = asciiCode;
    }
    
    return result
  }
  console.log(decrypt('dnotq'))