const findTheOldest = function(persons) {
    persons = persons.map(person => {
        if (!('yearOfDeath' in person)) {
            let date = new Date();
            person['yearOfDeath'] = date.getFullYear();
            return person;
        }
        return person;
    });

    return persons.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge;
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
