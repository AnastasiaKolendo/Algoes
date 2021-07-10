// function flattenDictionary(dict) {

//     let flattenedDict = {}

//     let keys = Object.keys(dict);

//     for (let i = 0; i < keys.length; i++) {
//         let key = keys[i];

//         if (typeof dict[key] === 'object') {

//             let recObj = flattenDictionary(dict[key]);

//             for (let recKey in recObj) {
//                 if (recKey.length === 0) {
//                     flattenedDict[key] = recObj[recKey];
//                 } else {
//                     if (key.length !== 0) {
//                         flattenedDict[key + '.' + recKey] = recObj[recKey];
//                     } else {
//                         flattenedDict[recKey] = recObj[recKey];
//                     }

//                 }
//             }
//         } else {
//             flattenedDict[key] = dict[key]
//         }
//     }
//     return flattenedDict;
// }


function flattenDictionary(dict) {
    let flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary;
}


function flattenDictionaryHelper(initialKey, dict, flatDictionary) {

    for (let key in dict) {
        value = dict[key];

        if (typeof value !== 'object') {
            if (!initialKey || initialKey === "") {
                flatDictionary[key] = value
            } else {
                flatDictionary[initialKey + "." + key] = value
            }
        } else {
            if (!initialKey || initialKey === "") {
                flattenDictionaryHelper(key, value, flatDictionary)
            } else {
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)
            }

        }
    }
}


console.log(flattenDictionary({
    "": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "3",
            "e": {
                "": "1"
            }
        }
    }
}))

