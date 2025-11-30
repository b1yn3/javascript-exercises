const sumAll = function(a, b) {
    if(![a, b].every(x => Number.isInteger(x) && x >=0)){
        return "ERROR";
    }

    if(a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    let sum = 0;
    while(a <= b){
        sum += a;
        a++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
