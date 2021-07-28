function meanGroups(a) {
    const result = [];
    let obj = {};
   
    for(let i = 0; i < a.length; i++){
        let firstGroup = a[i];
        let sum = 0;
        for(let j = 0; j < firstGroup.length; j++){
            sum += Number(firstGroup[j]);
        }
       
        let average = sum / firstGroup.length;
        console.log(average, 'ave')
        if(obj[average]){
            obj[average].push(i)
        } else {
            obj[average] = [i];
        }
    }
   
    for(let key in obj){
        result.push(obj[key]);
    }
   
    return result.sort((a, b) => a[0] - b[0]);
 }
 