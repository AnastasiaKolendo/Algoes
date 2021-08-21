function generateRandomColor(){
    let str = '#';

    for(let i = 0; i < 7; i++){
        str += Math.floor(Math.random() * 15).toString(16)
    }
    return str;
}
const arr = [];

for(let i = 0; i < 10; i++){
    arr.push(generateRandomColor());
}

for(let i = 0; i < arr.length; i++){
    console.log(colorize(arr[i]));
}
//Design a simple web app that features a color swatch preview (in 6 color hex notation, e.g. #a02bff), 
//and filter button. When pressed, the filter button should apply a 'Rose' fitler, 
//making the color of the swatch 20% more red, 10% less green, and 10% more blue. 

function colorize(color){
    let redVal = parseInt(color.substring(1, 3), 16);
    let greenVal = parseInt(color.substring(3, 5), 16);
    let blueVal = parseInt(color.substring(5, 7), 16);

    //25 is 10% of 255
    redVal = redVal + 50 <= 255 ? redVal + 50 : 255;
    greenVal = greenVal - 25 >= 0 ? greenVal - 25 : 0;
    blueVal = blueVal + 25 <= 255 ? blueVal + 25 : 255;
    
    let result = [redVal, greenVal, blueVal];
    result = result.map(convertingToHex).join('')
    return '#' + result;
}

function convertingToHex(val){
    
    if(val.toString(16).length === 1){
        return '0' + val.toString(16);
    }
    return val.toString(16)
}

//(0.299*R + 0.587*G + 0.114*B)

(function (){

})()




