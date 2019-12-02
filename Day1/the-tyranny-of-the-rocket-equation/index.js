const readline = require('readline');
const fs = require('fs');
let puzzleInput = fs.readFileSync('./puzzle-input.txt', {encoding: 'utf8'}).split(/\r?\n/);

const calculateFuelConsumption = mass => parseInt(mass / 3) - 2;
const calculateFuelConsumptionWithAddedFuel = mass => {
    let total = 0;
    while (mass > 8) {
      total += calculateFuelConsumption(mass);
      mass = calculateFuelConsumption(mass);
    }
    return total;
};

const calculateModuleFuelRequirement = () => {
    return puzzleInput.reduce((accum, mass) => {
        return accum += calculateFuelConsumption(mass);
    }, 0);
};

const calculateModuleFuelRequirementWithAddedFuel = () => {
    return puzzleInput.reduce((accum, mass) => {
        return accum += calculateFuelConsumptionWithAddedFuel(mass);
    }, 0);
};

console.log('PART 1 SOLUTION: ', calculateModuleFuelRequirement());
console.log('PART 2 SOLUTION: ', calculateModuleFuelRequirementWithAddedFuel());

module.exports = { calculateFuelConsumption, calculateFuelConsumptionWithAddedFuel };
