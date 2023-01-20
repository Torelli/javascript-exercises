const sumAll = function(n1, n2) {
    let smallerNum = n1;
    let largerNum = n2;
    if (
        n1 < 0 || 
        n2 < 0 ||
        (typeof(n1) !== "number" && typeof(n1) !== "bigint") ||
        (typeof(n2) != "number" && typeof(n2) != "bigint")
    ) {
        return 'ERROR';
    }
    if (n1 > n2) {
        smallerNum = n2;
        largerNum = n1;
    }
    let result = smallerNum;
    for(let i = smallerNum; i < largerNum; i++) {
        (result === Number.MAX_SAFE_INTEGER) ? 
        result = BigInt(result) + BigInt(i + 1) :
        result += i + 1;
    }
    return result;
};

console.log(sumAll(4000, 1));

// Do not edit below this line
module.exports = sumAll;
