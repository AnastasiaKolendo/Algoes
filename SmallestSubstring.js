function getShortestUniqueSubstring(arr, str) {
    const counter = new Map();
    const add = i => {
      const c = str[i];
      const count = counter.get(c);
      if(count === undefined) {
        counter.set(c, 1);
      } else {
        counter.set(c, count + 1);
      }
    }
    const remove = i => {
      const c = str[i];
      const count = counter.get(c);
      if(count === 1) {
        counter.delete(c);
      } else {
        counter.set(c, count - 1);
      }
    }
    let i = 0;
    let j = 0;
    let resultI = 0;
    let resultJ = str.length;
    while (j < str.length || counter.size === arr.length) {
      if(counter.size === arr.length) {
        if(j - i < resultJ - resultI) {
          resultI = i;
          resultJ = j;
        }
        remove(i);
        i++;
      } else {
        add(j);
        j++;
      }
    }
    return str.substring(resultI, resultJ);
  }

console.log(getShortestUniqueSubstring(['x', 'y', 'z'], "xyyzyzyx"))

