const removeFromArray = function(initArray, ...theArgs) {
    let newArray = initArray;
    let getNewArray = () => {
        for(const arg of theArgs) {
            newArray = newArray.filter(value => value !== arg);
        }
    };
    getNewArray();
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
