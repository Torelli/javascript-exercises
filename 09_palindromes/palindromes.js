const palindromes = function (str) {
    let string = str.replaceAll(/[!.,\s]/g,"").toLowerCase();
    let revString = str.replaceAll(/[!.,\s]/g,"").toLowerCase().split("").reverse().join("");
    return string === revString;
};

// Do not edit below this line
module.exports = palindromes;
