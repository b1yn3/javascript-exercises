const repeatString = function(a, b) {
    if(b < 0){
        return "ERROR";
    }
    if(b == 0){
        return '';
    }

    let word = a;
    for(let i =1; i < b; i++){
        word = word + a;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
