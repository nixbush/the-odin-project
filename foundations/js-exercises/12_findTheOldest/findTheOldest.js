const findTheOldest = function (person) {
  const CURRENT_YEAR = new Date().getFullYear();

  // This checks if yearOfDeath is set, if not, assume they died this year to get full age
  return person.reduce((oldest, current) => {
    let currentAge = current.yearOfDeath - current.yearOfBirth;
    if (!("yearOfDeath" in current)) {
      currentAge = CURRENT_YEAR - current.yearOfBirth;
    }

    let oldestAge = oldest.yearOfDeath - current.yearOfBirth;
    if (!("yearOfDeath" in oldest)) {
      oldestAge = CURRENT_YEAR - oldest.yearOfBirth;
    }

    console.log(`${currentAge} ${oldestAge}`);
    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
