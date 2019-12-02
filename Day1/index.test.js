const {calculateFuelConsumption, calculateFuelConsumptionWithAddedFuel} = require('./index');

describe('Calculate Mass', () => {
    it('Should be able to calculate a value without rounding', () => {
        const moduleMass = 12;
        const expectedModuleFuelRequirement = 2;
        const actualModuleFuelRequirement = calculateFuelConsumption(moduleMass);
        expect(expectedModuleFuelRequirement).toEqual(actualModuleFuelRequirement);
    });
    it('Should be able to calculate a value with rounding', () => {
        const moduleMass = 14;
        const expectedModuleFuelRequirement = 2;
        const actualModuleFuelRequirement = calculateFuelConsumption(moduleMass);
        expect(expectedModuleFuelRequirement).toEqual(actualModuleFuelRequirement);
    });
    it('Should be able to calculate a value mass with 4 digits', () => {
        const moduleMass = 1969;
        const expectedModuleFuelRequirement = 654;
        const actualModuleFuelRequirement = calculateFuelConsumption(moduleMass);
        expect(expectedModuleFuelRequirement).toEqual(actualModuleFuelRequirement);
    });
    it('Should be able to calculate a value mass with 6 digits', () => {
        const moduleMass = 100756;
        const expectedModuleFuelRequirement = 33583;
        const actualModuleFuelRequirement = calculateFuelConsumption(moduleMass);
        expect(expectedModuleFuelRequirement).toEqual(actualModuleFuelRequirement);
    });
});

describe('Fuel for the additional fuel', () => {
    it('Should be able to calculate the additional fuel consumption that does not need more than one calculation', () => {
        const moduleMass = 14;
        const expectedModuleFuelConsumption = 2;
        const actualModuleFuelConsumption = calculateFuelConsumptionWithAddedFuel(moduleMass);
        expect(expectedModuleFuelConsumption).toEqual(actualModuleFuelConsumption);
    });
    it('Should be able to calculate the additional fuel consumption that that requires four steps', () => {
        const moduleMass = 1969;
        const expectedModuleFuelConsumption = 966;
        const actualModuleFuelConsumption = calculateFuelConsumptionWithAddedFuel(moduleMass);
        expect(expectedModuleFuelConsumption).toEqual(actualModuleFuelConsumption);
    });
    it('Should be able to calculate the additional fuel consumption that that requires eight steps', () => {
        const moduleMass = 100756;
        const expectedModuleFuelConsumption = 50346;
        const actualModuleFuelConsumption = calculateFuelConsumptionWithAddedFuel(moduleMass);
        expect(expectedModuleFuelConsumption).toEqual(actualModuleFuelConsumption);
    });
});
