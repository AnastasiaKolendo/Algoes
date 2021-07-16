function quickSort(arr, left, right){
    let pivot = partion(arr, left, right);

    console.log(pivot, arr, 'here')

    if(left < pivot - 1){
        //sort leftHalf
        quickSort(arr, left, pivot - 1)
    }

    if(pivot < right){
        //sort rightHalf
        quickSort(arr, pivot, right)
    }
}

function partion(arr, left, right){
    let mid = arr[left + Math.floor((right - left) / 2)];

    while(left <= right){
        while(arr[left] < mid){
            left++;
        }
    
        while(arr[right] > mid){
            right--;
        }
    
        if(left <= right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    return left;
}



let array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSort(array, 0, array.length - 1)
console.log(array)