
function lowerBound(products, start, word) {
    let i = start, j = products.length, mid;
    while (i < j) {
        mid = Math.floor((i + j) / 2);
        if (products[mid] >= word)
            j = mid;
        else
            i = mid + 1;
    }
    return i;
}

function suggestedProducts(products, searchWord) {
    products.sort((a,b) => a.localeCompare(b));
    let result = [];
    let start = 0, bsStart = 0, n = products.length;
    let prefix = '';
    for (let c in searchWord.split('')) {
        prefix += c;

        start = lowerBound(products, bsStart, prefix);

        result.push([]);

        for (let i = start; i < Math.min(start + 3, n); i++) {
            if (products[i].length < prefix.length || !products[i].substring(0, prefix.length) === prefix)
                break;
            result[result.length - 1].push(products[i]);
        }

        bsStart = Math.abs(start);
    }
    return result;
}

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], 'mouse'))