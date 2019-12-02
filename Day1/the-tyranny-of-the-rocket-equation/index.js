const readline = require('readline');
const fs = require('fs');

const calculateFuelConsumption = mass => parseInt(mass / 3) - 2;
const calculateFuelConsumptionWithAddedFuel = mass => {
    let total = 0;
    while (mass > 8) {
      total += calculateFuelConsumption(mass);
      mass = calculateFuelConsumption(mass);
    }
    return total;
}

const calculateModuleFuelRequirement = async () => {
    const rl = readline.createInterface({ input: fs.createReadStream('./puzzle-input.txt') });
    let total = 0;
    rl.on('line', function(line) {
        total += calculateFuelConsumption(line);
        console.log(calculateFuelConsumption(line))
        console.log(total)
    });
    await total;
    return total;
}

const calculateModuleFuelRequirementWithAddedFuel = async () => {
    const rl = readline.createInterface({ input: fs.createReadStream('./puzzle-input.txt') });
    let total = 0;
    rl.on('line', function(line) {
        total += calculateFuelConsumptionWithAddedFuel(line);
        console.log('TOTAL: ', total)
    });
    await total;
    return total;
}

calculateModuleFuelRequirementWithAddedFuel();

module.exports = { calculateFuelConsumption, calculateFuelConsumptionWithAddedFuel };
