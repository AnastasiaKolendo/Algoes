function wordCountEngine(document) {

    let newString = document.replace(/[.,\/#!$%\^&\*;':{}=\-_`~()]/g, "").toLowerCase();
    let documentScan = [];
    let strArray = newString.split(' ');
    let dictObj = {}

    strArray.forEach(word => {
        if (word !== '') {
            if (dictObj[word]) {
                dictObj[word]++;
            } else {
                dictObj[word] = 1;
            }
        }
    })


    let keys = Object.keys(dictObj);

    for (let key of keys) {
        documentScan.push([key, dictObj[key]])
    }
    documentScan = documentScan.sort((a, b) => b[1] - a[1])
    return documentScan;
}


console.log(wordCountEngine("da makes  perfect practice. you'll only get Perfect just . by practice!"))