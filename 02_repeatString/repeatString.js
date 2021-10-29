const repeatString = function(str, repeats) {
    let repeatedString = '';
    
    for (let repeat = 0; repeat < repeats; repeat++) {
        repeatedString += str;
    }
    
    return (repeats >= 0) ? repeatedString : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
