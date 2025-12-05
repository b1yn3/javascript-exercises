const getTheTitles = function(books) {
    // let arr = [];
    // for(let i = 0; i < books.length; i++){
    //     arr.push(books[i]['title']);
    // }
    // return arr;

    return books.map(books => books.title);
};

// Do not edit below this line
module.exports = getTheTitles;
