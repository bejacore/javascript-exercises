const palindromes = function (str) {
    let letters = 'abcdefghijklmnopqrstuvwxyz1234567890';

    let strArr = str.toLowerCase().split('');
    for (let i = 0; i < strArr.length; i++) {
        if (!letters.includes(strArr[i])) {
            strArr.splice(i, 1);
            i--;
        }
    }
    
    let newLen = strArr.length;
    for (let i = 0; i < newLen; i++) {
        if (strArr[i] !== strArr[newLen - (i + 1)])
            return false;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
