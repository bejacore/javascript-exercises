const sumAll = function(...args) {
    args.sort();

    let sum = 0;
    const initialNum = args.at(0);
    const finalNum = args.at(-1);

    if (typeof initialNum !== 'number' || 
        typeof finalNum !== 'number' ||
        initialNum < 0) {

        return 'ERROR';
    }

    for (let num = initialNum; num <= finalNum; num++) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
