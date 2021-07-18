function calculateSubsequenceOccurences(sequence, subSequence) {
    const cache = new Array(sequence.length * subSequence.length)
    const findOccurences = (i, j) => {
        const key = i * subSequence.length + j
        const cached = cache[key]
        console.log(cached, 'cached')
        if (cached !== undefined) {
            return cached
        }
        if (j === subSequence.length) {
            return 1
        }
        if (i === sequence.length) {
            return 0
        }
        if (sequence[i] === subSequence[j]) {
            cache[key] = findOccurences(i + 1, j + 1) + findOccurences(i + 1, j) 
        } else {
            cache[key] = findOccurences(i + 1, j) 
        }
        return cache[key]
    }
    return findOccurences(0, 0)
}

const a = [1,3,6,5,8,7,10,7]
const b = [1,6,7]
console.log(calculateSubsequenceOccurences(a, b))