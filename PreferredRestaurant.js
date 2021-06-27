function preferredRestaurant(preferences) {
    let secSet = {};
    let firstSet = {};

    for(let i = 0; i < preferences[0].length; i++){
        secSet = {};
        let noMatch = false;
        let restaurant = preferences[0][i];
        let secondIndex = 0;

        while(preferences[1][secondIndex] != restaurant){
            if(firstSet[preferences[1][secondIndex]])
                noMatch = true;
            secSet[preferences[1][secondIndex++]);
        }
         
        if(noMatch){
            continue;
            
        }

        let thirdIndex = 0;

        while(preferences[2][thirdIndex] != restaurant){
            if(secSet.contains(preferences[2][thirdIndex]) || firstSet.contains(preferences[2][thirdIndex])){
                break;
            }
            thirdIndex++;
        }
        if(preferences[2][thirdIndex] == restaurant)
            return restaurant;
        
        
        firstSet.add(restaurant);
    }

    return -1;
}


preferences = [[1, 2, 3, 4],
               [3, 1, 4, 2],
               [4, 2, 1, 3]]
console.log(preferredRestaurant(preferences))