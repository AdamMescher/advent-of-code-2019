const Grid = require('./index');

describe('Grid', () => {
    it('Should initialize with a grid with a width of 3 and a height of 3', () => {
        const grid = new Grid();
        const expectedCurrentX = 1;
        const expectedCurrentY = 1;
        const actualCurrentX = grid.current.x;
        const actualCurrentY = grid.current.y;
        const expectedGrid = [
            ['.', '.', '.'],
            ['.', 'o', '.'],
            ['.', '.', '.'],
        ];
        const actualGrid = grid.grid;
        const expectedGridHeight = 3;
        const actualGridHeight = grid.height;
        const expectedGridWidth = 3;
        const actualGridWidth = grid.width;
        expect(expectedCurrentX).toEqual(actualCurrentX);
        expect(expectedCurrentY).toEqual(actualCurrentY);
        expect(expectedGridHeight).toEqual(actualGridHeight);
        expect(expectedGridWidth).toEqual(actualGridWidth);
        expect(expectedGrid).toEqual(actualGrid);
    });
    it('Should be able to draw right', () => {
        const grid = new Grid();
        grid.drawRight(4);
        const expectedGrid = [
            ['.', '.', '.', '.', '.', '.', '.'],
            ['.', 'o', '-', '-', '-', '+', '.'],
            ['.', '.', '.', '.', '.', '.', '.'],
        ];
        const actualGrid = grid.grid;
        expect(expectedGrid).toEqual(actualGrid);
    });
})