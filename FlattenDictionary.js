function flattenDictionary(dict) {
  
    let flattenedDict = {}
    
    let keys = Object.keys(dict);
      
     for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        
        if(typeof dict[key] === 'object'){
          let newKey = `${key}.`;
          let recObj = flattenDictionary(dict[key]);
   
          for(let recKey in recObj){
            if(recKey.length === 0){
              flattenedDict[key] = recObj[recKey];
            } else {
              if(key.length !== 0){
                flattenedDict[key + '.' + recKey] = recObj[recKey];
              } else {
                flattenedDict[recKey] = recObj[recKey];
              }
              
            }
          }
        } else {
            flattenedDict[key] = dict[key]
        }
      }
      return flattenedDict;
    }
    