var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let row = board[i];
        
        if(!isValid(board[i])){
            return false;
        }
    }
    
    for(let i = 0; i <  board.length; i++){
        let column = [];
        for(let j = 0; j < board[0].length; j++){
            column.push(board[j][i]);
        }
        
        if(!isValid(column)){
            return false;
        }  
    }
        
    
    for(let i = 0; i < board.length; i += 3){
        for(let j = 0; j < board[0].length; j += 3){
            let arr = [];
            
            for (let k = i; k < i + 3; k++){
                for(let m = j; m < j + 3; m++){
                    arr.push(board[k][m]);
                }
            }
            if(!isValid(arr)){
                return false;
            }  
        }
    }
    
   return true;
};


function isValid(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '.' && obj[arr[i]]){
            return false;
        } else {
            obj[arr[i]] = 1;
        }
        
    }
    return true;
}

console.log(isValidSudoku([[".",".",".",".",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],["9","3",".",".","2",".","4",".","."],[".",".","7",".",".",".","3",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".","3","4",".",".",".","."],[".",".",".",".",".","3",".",".","."],[".",".",".",".",".","5","2",".","."]]))