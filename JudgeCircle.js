var judgeCircle = function(moves) {
    const movesObj = {'U': -1, 'D': 1, 'L': -1, 'R': 1};
    let start = [0, 0];
    for(let i = 0; i < moves.length; i++){
        if(moves[i] === 'U' || moves[i] === 'D'){
            start[0] += movesObj[moves[i]];
        } else {
            start[1] += movesObj[moves[i]];
        }
    }
    if(start[0] === 0 && start[1] === 0){
        return true;
    }
    
    return false;
};

console.log(judgeCircle("UD"));