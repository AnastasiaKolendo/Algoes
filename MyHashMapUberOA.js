class HashMap {
    constructor() {
      this.map = {};
      this.key = 0;
      this.value = 0;
    }
  
    insert(x, y) {
      this.map[parseInt(x) - this.key] = y - this.value;
    }
  
    get(x) {
      return this.map[parseInt(x) - this.key] + this.value;
    }
  
    addToKey(n) {
      this.key += n;
    }
  
    addToValue(n) {
      this.value += n;
    }
  }
  
  function testHashMap(queryTypes, queries) {
    let getValue = 0;
    const map = new HashMap();

    for (let i = 0; i < queryTypes.length; i++) {
      const query = queries[i];

      const queryType = queryTypes[i];
      
      switch(queryType) {
        case 'get':
          const res = map.get(query[0]);
          if (res !== undefined && res > 0) {
            getValue += res;
          }
          break;
        case 'insert':
          map.insert(query[0], query[1]);
          break;
        case 'addToKey':
          map.addToKey(query[0]);
          break;
        case 'addToValue':
          map.addToValue(query[0]);
          break;
      }
    }
  
    return getValue;
  }


console.log(testHashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1, 2], [2, 3], [2], [1], [3]]));
console.log(testHashMap(["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"], [[1, 2], [2], [1], [2, 3], [1], [-1], [3]]));