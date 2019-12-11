const readlineSync = require('readline-sync');

class Intcode {
    constructor(program, mode) {
        this.program = program.split(',').map(num => parseInt(num));
        this.current = 0;
    }

    run() {
      const execute = async position => {
        if (this.program[position] === 99) {
          console.log(`SOLUTION: `, this.program[0]);
          return this.program[0];
        } else {
          this.step(this.current);
          execute(this.current);
        }
      }
      execute(this.current);
    }

    advancePostion = distance => this.current += distance;

    generateErrorMessage = (type, value) => {
        if(type === 'opcode') {
            return `Opcode not recognized at position ${value} - ${this.program[value]}.`;
        } else {
            return `Unknown error -- ${value}`;
        }
    }

    updatePositionValue(position, value) {
        this.program[position] = value;
    }

    add(current) {
        const sum = this.program[this.program[current + 1]] + this.program[this.program[current + 2]];
        const position = this.program[this.program[current + 3]];
        this.updateValueAtPosition(position, sum);
        this.advancePostion(4);
    }

    multiply(current) {
        const product = this.program[this.program[current + 1]] * this.program[this.program[current + 2]];
        const position = this.program[this.program[current + 3]];
        this.updateValueAtPosition(position, product);
        this.advancePostion(4);
    }

    takeInput(current) {
        const input = readlineSync.question('INPUT: ');
        this.program[this.program[current + 1]] = parseInt(input);
        this.advancePostion(2);
    }

    displayOutput(current) {
        console.log('OUTPUT: ', this.program[this.program[current + 1]]);
        this.advancePostion(2);
    }

    immediateMode(current) {

    }

    positionMode(current) {
        if (this.program[current] === 1) {
            this.add(current);
        } else if (this.program[current] === 2) {
            this.multiply(current);
        } else if (this.program[current] === 3) {
            this.takeInput(current);
        } else if (this.program[current] === 4) {
            this.displayOutput(current);
        } else {
            console.error(this.generateErrorMessage('opcode', current));
        }
    }

    step(position) {
        if(this.program[position].toString().length > 2) {
            this.immediateMode(position);
        } else {
            this.positionMode(position);
        }
    }
}

const program = '1002,4,3,4,33';
const computer = new Intcode(program, 0);
computer.run();