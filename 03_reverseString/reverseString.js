const reverseString = function(word) {
    let reversedWord = '';
    let wordLenght = word.length;

    for (let i = 1; i <= wordLenght; i++) {
        reversedWord += word.substr(-i, 1);
    } 

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
