const removeFromArray = function(arr, ...options) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(!options.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
