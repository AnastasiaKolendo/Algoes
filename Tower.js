class Tower {
    constructor(i){
        super();
        this.stack = [];
        this.index = i;
    }

    index() {
        return this.index
    }

    add(d){
        if(this.stack.length !== 0 && this.stack[this.stack.length - 1] <= d ){
            console.log("error")
        } else {
            this.stack.push(d);
        }
    }

    moveToTop(t){
        let top = this.stack.pop();
        t.add(top)
    }

    moveDisks(n, destination, buffer) { 
        if (n !== 1) {
            //Shift first disk from 'A' to 'B'.
            moveDisks(n - 1, buffer, destination); 
            //Shift second disk from 'A' to 'C'.
            moveTopTo(destination);
            //Shift first disk from 'B' to 'C'.
            buffer.moveDisks(n - 1, destination, this);
        } else {
            return;
        }
    }
}