

function lexicalOrder(s, t) {
    let sLength = s.length;
    let tLength = t.length;

    let count = 0;

    check(s, sLength, count, t);
    check(t, tLength, count, s);

    return count;
}

 function check(s, len, count, t) {
    for(let i = 0; i < len; i++){
      if((s.substring(0, i) + s.substring(i + 1).localeCompare(t) > 0)){
        count++;
      }
    }
  }


console.log(lexicalOrder('123ab', '423cd'))
