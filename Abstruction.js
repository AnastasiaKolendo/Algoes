class ClassName {
    constructor(init1, init2) {
        this.prop1 = init1;
        this.prop2 = init2;
    }
    get props() {
        return [this.prop1, this.prop2];
    }
    set props(val) {
        ([this.prop1, this.prop2] = val);
    }
    methodInst() {
        // Instance level method.
        // Do something...
    }
    static methodStat() {
        // Class level method.
        // Do something...
    }
}

const inst = new ClassName(12, 7);
console.log(inst.prop2);
inst.methodInst();
ClassName.methodStat();