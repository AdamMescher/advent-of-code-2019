const addWireLocations = (str) => {

}

class Grid {
    constructor() {
        this.grid = [
            ['.', '.', '.'],
            ['.', 'o', '.'],
            ['.', '.', '.'],
        ];
        this.current = { x: 1, y: 1 };
        this.height = this.grid.length;
        this.width = this.calcWidth();
    }

    calcWidth() {
        return this.grid.reduce((accum, row) => {
            if (row.length > accum) {
                accum = row.length;
            }
            return accum;
        }, 0);
    }

    equalize() {
        this.grid.forEach(row => {
            if (row.length < this.width) {
                while (row.length < this.width) {
                    row.push('.');
                }
            }
        })
    }

    drawRight(distance) {
        for (let i = 0; i < distance; i++) {
            this.current.x += 1;
            if (i === distance - 1) {
                this.grid[this.current.y][this.current.x] = '+'
            } else {
                this.grid[this.current.y][this.current.x] = '-'
            }
            this.grid[this.current.y][this.current.x + 1] = '.';
        }
        this.width = this.calcWidth();
        console.log(this.width)
        this.equalize();
    }
}

const grid = new Grid();

module.exports = Grid;
