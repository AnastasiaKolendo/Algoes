// property: 
// - elements are in ascending order
// - complete binary tree (node is smaller than it’s children)
// - root is the most minimum
// - insert takes O(logn) time
//     - insert to the bottom right
//     - bubble up until it meets requirements
// - extract_min takes O(logn) time
//     - replace min with bottom right
//     - bubble down until it meets requirements
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
          var parent = Math.floor((index + 1) / 2) - 1;
          
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
          
          // if current is greater than child
          if (this.data[index] > this.data[child]) {
            toSwap = child;
          }
          
          // if sibling is smaller than child, but also smaller than current
          if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
              toSwap = sibling;
          }
          
          // if we don't need to swap, then break.
          if (toSwap == null) {
            break;
          }
          
          var temp = this.data[toSwap];
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

console.log(heap.extractMin());

function sortKMessedArray(arr, k){
    let n = arr.length

    let heap = new MinHeap()

    for(let i = 0; i < arr.length; i++){
        heap.insert(i)
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