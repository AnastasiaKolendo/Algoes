function flatten(list){
    let result = [];
    
    for(let i = 0; i < list.length; i++){
        let curr = list[i];
        if(!curr.isInteger()){
            result.push(...flatten(curr.getList()))
        } else {
            let int = curr.getInteger();
            result.push(int);
        }
    }

    return result;
}

var NestedIterator = function(nestedList) {
    this.stack = [];
    this.flatted = flatten(nestedList);
};

NestedIterator.prototype.hasNext = function() {
    if(this.flatted.length > 0){
        return true;
    }
    return false;
};



NestedIterator.prototype.next = function() {
   if(this.hasNext()){
       return this.flatted.shift();
   }
};
