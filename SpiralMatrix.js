function spiralOrder(matrix){
    let resultArray = [];

    if(matrix.length === 0) return 0;

    let rowLength = matrix.length;

    let columnLength = matrix[0].length;

    const seen = Array(rowLength).fill(0).map(() => Array(columnLength).fill(0));

    let dirRow = [0, 1, 0, -1];
    let dirCol = [1, 0, -1, 0];

    let row = 0;
    let col = 0;
    let dir = 0;

    for(let i = 0; i < rowLength * columnLength; i++){
        resultArray.push(matrix[row][col]);
        seen[row][col] = true;
        let cr = row + dirRow[dir];//0//0//0
        let cc = col + dirCol[dir];//1//2//3
        if(0 <= cr && cr < rowLength && 0 <= cc && cc < columnLength && !seen[cr][cc]){
            row = cr;
            col = cc;
        } else {
            dir = (dir + 1) % 4;//1
            row += dirRow[dir];//1//2
            col += dirCol[dir]//2//2
        }
    }
    return resultArray;
}

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))