class Hanoi{
    constructor(){
        this.disks = [];
    }


    add(d){
        if(!disks.length === 0 && disks[disks.length - 1] <= d){
            throw new Error("Can't place the disk");
        } else {
            disks.push(d);
        }
    }


    moveTopTo(tower){
        let top = disks.pop();
        tower.add(top);
    }

    moveDisks(quantity, destination, buffer){
        if(quantity <= 0) return;
        //move n - 1 to buffer using dest
        moveDisks(quantity - 1, buffer, destination);
        //move the last element to dest
        moveTopTo(destination);
        //move the rest to dest using this
        moveDisks(quantity - 1, destination, this)
    }
}     