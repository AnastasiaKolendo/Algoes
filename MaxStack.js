/**
 * initialize your data structure here.
 */
 var MaxStack = function() {
    this.stack = [];
    this.maxElements = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    let max = this.maxElements.length === 0 ? x : this.maxElements[this.maxElements.length - 1];
    this.maxElements.push(max > x ? max : x);
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    this.maxElements.pop();
    return this.stack.pop();
}
    
    

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.maxElements[this.maxElements.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const max = this.peekMax();
    
    const buffer = [];
    while(this.top() !== max){
        buffer.push(this.pop());
    }
    
    this.pop();
    
    while(buffer.length > 0){
        this.push(buffer.pop());
    }
    
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */