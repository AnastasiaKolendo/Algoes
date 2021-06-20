
class MinHeap{
    constructor(){
        this.data = [];
    }

    insert(val){
        this.data.push(val);
        this.bubbleUp(this.data.length-1);
    }

    extractMin () {
        let min = this.data[0];
        
        this.data[0] = this.data.pop();
        
        this.bubbleDown(0);
        
        return min;
      };

      bubbleUp (index) {
        while (index > 0) {
          let parent = Math.floor((index + 1) / 2) - 1;
          
          if (this.data[parent] > this.data[index]) {
            // swap
            var temp = this.data[parent];
            this.data[parent] = this.data[index];
            this.data[index] = temp;
          }
          
          index = parent;
        }
      };

      bubbleDown (index) {
        while (true) {
          var child = (index+1)*2;
          var sibling = child - 1;
          var toSwap = null;
          
          if (this.data[index] > this.data[child]) {
            toSwap = child;
          }
          
          if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
              toSwap = sibling;
          }
          
          if (toSwap == null) {
            break;
          }
          
          let temp = this.data[toSwap];
          this.data[toSwap] = this.data[index];
          this.data[index] = temp;
          
          index = toSwap;
        }
      };
}

var heap = new MinHeap();
heap.insert(6);
heap.insert(2);
heap.insert(7);

// console.log(heap.extractMin());
// console.log(heap.extractMin());

function sortKMessedArray(arr, k){
    let n = arr.length;

    let heap = new MinHeap()

    for(let i = 0; i < arr.length; i++){
        heap.insert(arr[i])
    }
    

    for(let i = 0; i < k + 1; i++){
        arr[i-(k+1)] = heap.extractMin()
        heap.insert(arr[i])
    }

   
    for(let i = 0; i < k; i++){
        arr[n-k-1 + i] = heap.extractMin()
    }  

    return arr;
}
console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))



function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let min = arr[i];
        console.log(min, 'min')
        let j = i - 1;

        while(j >= 0 && arr[j] > min){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = min
        console.log(arr, 'arr')
    }
    return arr
}

console.log(insertionSort([1, 4, 5, 2, 3, 7, 8, 6, 10, 9]))
