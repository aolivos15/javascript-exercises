const findTheOldest = function(people) {
  // If yearOfDeath is undefined, assign current year
  people.forEach(person => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });

  people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
