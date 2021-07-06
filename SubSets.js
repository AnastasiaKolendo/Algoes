function subsets(nums) {
    return findSubsets(nums)
}

function findSubsets(nums) {
//     if(nums.length === start) return [[]];
//     const current = nums[start];
//     const restSubsets = pingas(nums, start + 1);
//     const subsets = restSubsets.slice();
    
//     restSubsets.forEach(restSubset => {
//         const restSubsetCopy = restSubset.slice()
//         restSubsetCopy.unshift(current)
//         subsets.push(restSubsetCopy)
//     })
//     return subsets
    
    if(nums.length === 0) return [[]]
    
    let first = nums[0];
    
    let restSubsets = findSubsets(nums.slice(1));
    let subsets = restSubsets.slice();
    
    for(let i = 0; i < restSubsets.length; i++){
        let subset = [first, ...restSubsets[i]];
        subsets.push(subset)
        
    }
    return subsets
}





//Time Complexity: O(N * 2^n)
//Space complexity: O(N * 2^n)