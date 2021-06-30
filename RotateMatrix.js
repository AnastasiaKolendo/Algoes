
function rotate(matrix, k) {
    const n = matrix.length;
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if(i === j) continue;
            for (let r = 0; r < k % 4; r++) {
                const d = matrix[n - 1 - j][i]
                console.log( matrix[n  - 1 - j][i])
                matrix[n  - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
                
                console.log(matrix[n - 1 - i][n - 1 - j])
                matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
                matrix[j][n - 1 - i] = matrix[i][j]
                matrix[i][j] = d
            }
        }
    }
}

const mat = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const K = 1

rotate(mat, K)

mat.forEach(row => console.log(row))