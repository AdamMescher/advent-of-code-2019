const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'}).split(/\r?\n/);

// PART 1
const calculateFuelConsumption = mass => parseInt(mass / 3) - 2;
const calculateModuleFuelRequirement = (arr) => {
    return arr.reduce((accum, mass) => {
        return accum += calculateFuelConsumption(mass);
    }, 0);
};

// PART 2
const calculateFuelConsumptionWithAddedFuel = mass => {
    let total = 0;
    while (mass > 8) {
      total += calculateFuelConsumption(mass);
      mass = calculateFuelConsumption(mass);
    }
    return total;
};
const calculateModuleFuelRequirementWithAddedFuel = (arr) => {
    return arr.reduce((accum, mass) => {
        return accum += calculateFuelConsumptionWithAddedFuel(mass);
    }, 0);
};

module.exports = { calculateFuelConsumption, calculateFuelConsumptionWithAddedFuel };
