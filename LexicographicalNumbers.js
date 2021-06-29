

function lexicalOrder(s, t) {
    let sLength = s.length;
    let tLength = t.length;

    let count = 0;

    check(s, sLength, count, t);
    check(t, tLength, count, s);

    return count;
}

 function check(s, len, count, t) {
    for (let i = 0; i < len; i++) {
      if (Number.isNaN(s[i])) {
        let temp = s.substring(0, i) + s.substring(i + 1);

        if (temp.compareTo(t) < 0) {
          count++;
        }
      } else {

      }
    }
  }


console.log(lexicalOrder('123ab', '423cd'))
