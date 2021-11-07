const fibonacci = function(member) {

    if (member < 0) {
        return "OOPS";
    }

    let a = 1, b = 1;
    for (let i = 0; i < member - 2; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
