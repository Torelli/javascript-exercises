const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        if(!oldestPerson.yearOfBirth) oldestPerson.yearOfBirth = ((new Date()).getFullYear());
        if(!oldestPerson.yearOfDeath) oldestPerson.yearOfDeath = ((new Date()).getFullYear());
        if(!currentPerson.yearOfDeath) currentPerson.yearOfDeath = ((new Date()).getFullYear());
        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        let oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
