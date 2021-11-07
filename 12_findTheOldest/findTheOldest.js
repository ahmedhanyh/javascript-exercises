const findTheOldest = function(people) {
    const peopleSortedDesc = people.sort((a, b) => {
        let currentYear = (new Date()).getFullYear();
        let aYears = a.yearOfDeath ? (a.yearOfDeath - a.yearOfBirth) : (currentYear - a.yearOfBirth);
        let bYears = b.yearOfDeath ? (b.yearOfDeath - b.yearOfBirth) : (currentYear - b.yearOfBirth);
        if (aYears > bYears) {
            return -1;
        } else {
            return 1;
        }
    });

    return peopleSortedDesc[0];
};

// Do not edit below this line
module.exports = findTheOldest;
