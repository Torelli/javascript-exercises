const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    member = member - 1;
    const sequence = [1,1];
    let n1;
    let n2;
    for(let i = 0; i < member; i++) {
        n1 = sequence[sequence.length - 2];
        n2 = sequence[sequence.length - 1];
        sequence.push(n1 + n2);
    }
    return sequence[member];
};
fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
