const removeFromArray = function(array, ...itemsToRemove) {
    const arrayLength = array.length;

    for (const itemToRemove of itemsToRemove) {

        let itemToRemoveCount = 0;
        for (const item of array) {
            if (item === itemToRemove) {
                itemToRemoveCount++;
            }
        }

        for (let count = 0; count < itemToRemoveCount; count++) {
            for (let index = 0; index < arrayLength; index++) {
                let item = array[index];
    
                if (item === itemToRemove) {
                    array.splice(index, 1);
                }
            }
        }

    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
