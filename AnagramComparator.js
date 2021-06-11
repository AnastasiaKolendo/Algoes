function compareAnagrams(content){
    content = content.map(element => {
        element = element.split('').sort().join('')
        return element;
    });
    console.log(content)
}

compareAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])