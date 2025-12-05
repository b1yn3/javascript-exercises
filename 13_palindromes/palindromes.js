const palindromes = function (text) {
    const valid = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let validText = text.toLowerCase().split('').filter(chara => valid.includes(chara)).join('');
    let reversed = validText.split('').reverse().join('');
    return (reversed === validText);
};

// Do not edit below this line
module.exports = palindromes;
