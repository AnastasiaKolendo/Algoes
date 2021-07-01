function decrypt(word) {
  
    let result = []; 
    let firstStep = 1;
    
    
    for(let i = 0; i < word.length; i++){
      let charCode = word[i].charCodeAt(0) - firstStep;
     
      while(charCode < 'a'.charCodeAt(0)){
        charCode += 26;
      }
  
      let encryptedChar = String.fromCharCode(charCode);
  
      result.push(encryptedChar)
  
      firstStep += charCode;
    }
    
    return result.join('')
  }
  
  console.log(decrypt('dnotq'))

  //Time complexity O(n);
  //Space complexity O(n);
  