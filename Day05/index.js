const readline = require('readline');

class Intcode {
    constructor(program) {
        this.program = program.split(',').map(num => parseInt(num));
        this.current = 0;
    }

    run() {
        while (this.program[this.current] !== 99) {
            this.step(this.current);
        }
        return this.program[0];
    }

    step(position) {
        if (this.program[position] === 1) {
            this.program[this.program[this.current + 3]] = this.program[this.program[this.current + 1]] + this.program[this.program[this.current + 2]];
            this.current += 4;
        } else if (this.program[position] === 2) {
            this.program[this.program[this.current + 3]] = this.program[this.program[this.current + 1]] * this.program[this.program[this.current + 2]];
            this.current += 4;
        } else if (this.program[position] === 3) {
            const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
            rl.question(`What's your name?`, async (name) => {
                const userName = await name;
                console.log(userName);
                rl.close();
              })
            rl.close()
            this.current += 2;

        } else if (this.program[position] === 4) {
            console.log('OUTPUT: ', this.program[this.current + 3]);
            this.current += 2;
        } else { console.error(`Value not recognized at position ${position} - ${program[position]}`) }
    }
}

const program = '3,0,4,0,99';
const computer = new Intcode(program);
computer.run();