// Code your solution here

function findMatching(drivers, names) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === names.toLowerCase()
  );
}
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "bobby"));
console.log(findMatching(drivers, "Susan"));

function fuzzyMatch(drivers, name) {
  const lowercasename = name.toLowerCase();
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(lowercasename)
  );
}

console.log(fuzzyMatch(drivers, "Sa"));

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
