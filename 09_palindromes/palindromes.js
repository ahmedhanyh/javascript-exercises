const palindromes = function (str) {
    let strLength = str.length;
    
    let strOriginal = "";
    for (let c = 0; c < strLength; c++) {
        if (str[c] >= "A" && str[c] <= "Z" || str[c] >= "a" && str[c] <= "z") {
            strOriginal += str[c].toLowerCase();
        } else {
            continue;
        }
    }

    let strReversed = "";
    for (let c = strLength - 1; c >= 0; c--) {
        if (str[c] >= "A" && str[c] <= "Z" || str[c] >= "a" && str[c] <= "z") {
            strReversed += str[c].toLowerCase();
        } else {
            continue;
        }
    }
    return strOriginal === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
