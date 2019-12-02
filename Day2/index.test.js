const execute = require('./index');

describe('small', () => {
    it('Should complete one step if opcode is 1', () => {
        const input = '1,0,0,0,99'.split(',').map(num => parseInt(num));
        const expected = '2,0,0,0,99';
        const actual = execute('1,0,0,0,99'.split(',').map(num => parseInt(num)));
        expect(expected).toEqual(actual);
    });
    it('Should complete one step if opcode is 2', () => {
        const input = '2,3,0,3,99'.split(',').map(num => parseInt(num));
        const expected = '2,3,0,6,99';
        const actual = execute('2,3,0,3,99'.split(',').map(num => parseInt(num)));
        expect(expected).toEqual(actual);
    });
    it('Should complete one steps if altered index is not within original group of four', () => {
        const input = '2,3,0,3,99'.split(',').map(num => parseInt(num));
        const expected = '2,3,0,6,99';
        const actual = execute('2,3,0,3,99'.split(',').map(num => parseInt(num)));
        expect(expected).toEqual(actual);
    });
    it('Should complete multiple steps', () => {
        const input = '1,1,1,4,99,5,6,0,99'.split(',').map(num => parseInt(num));
        const expected = '30,1,1,4,2,5,6,0,99';
        const actual = execute('1,1,1,4,99,5,6,0,99'.split(',').map(num => parseInt(num)));
        expect(expected).toEqual(actual);
    });
});