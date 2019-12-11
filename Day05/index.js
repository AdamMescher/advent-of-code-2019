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
          this.positionMode(this.current);
          execute(this.current);
        }
      }
      execute(this.current);
    }

    positionMode(position) {
        if(this.program[position])
        if (this.program[position] === 1) {
            this.program[this.program[this.current + 3]] = this.program[this.program[this.current + 1]] + this.program[this.program[this.current + 2]];
            this.current += 4;
        } else if (this.program[position] === 2) {
            this.program[this.program[this.current + 3]] = this.program[this.program[this.current + 1]] * this.program[this.program[this.current + 2]];
            this.current += 4;
        } else if (this.program[position] === 3) {
          const input = readlineSync.question('INPUT: ');
          this.program[this.program[this.current + 1]] = parseInt(input);
          this.current += 2;
        } else if (this.program[position] === 4) {
            console.log('OUTPUT: ', this.program[this.program[this.current + 1]]);
            this.current += 2;
        } else {
            console.error(this.invalidOpcode(this.program, position));
        }
    }

    invalidMode(mode) {
        return `Unrecognized mode identified: ${mode}. Mode should be either POSITION MODE (0) or PARAMETER MODE (1).`;
    }

    invalidOpcode(program, position) {
        return `Opcode not recognized at position ${position} - ${program[position]}.`;
    }
}

const program = '1002,4,3,4,33';
const computer = new Intcode(program, 0);
computer.run();