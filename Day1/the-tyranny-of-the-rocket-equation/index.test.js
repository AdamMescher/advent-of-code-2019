/* For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
*/

const calculateFuelConsumption = require('./index');

describe('Calculate Mass', () => {
    it('Should be able to calculate a value without rounding', () => {
        const mass = 12;
        const fuelRequirement = calculateFuelConsumption(mass);
        const expectedFuel = 2;
        expect(expectedFuel).toEqual(fuelRequirement);
    });
    it('Should be able to calculate a value with rounding', () => {
        const mass = 14;
        const fuelRequirement = calculateFuelConsumption(mass);
        const expectedFuel = 2;
        expect(expectedFuel).toEqual(fuelRequirement);
    });
    it('Should be able to calculate a value mass with 4 digits', () => {
        const mass = 1969;
        const fuelRequirement = calculateFuelConsumption(mass);
        const expectedFuel = 654;
        expect(expectedFuel).toEqual(fuelRequirement);
    });
    it('Should be able to calculate a value mass with 6 digits', () => {
        const mass = 100756;
        const fuelRequirement = calculateFuelConsumption(mass);
        const expectedFuel = 33583;
        expect(expectedFuel).toEqual(fuelRequirement);
    });
});

describe('Read from input file', () => {
    it('Should be able to read the')
})