const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'}).split(',').map(num => parseInt(num));

const execute = (arr) => {
    let opcode = arr[0];
    let current = 0;
    while (opcode !== 99) {
        if (opcode === 1) {
            arr[arr[current + 3]] = arr[arr[current + 1]] + arr[arr[current + 2]];
            opcode = arr[current + 4];
            current += 4;
        } else {
            arr[arr[current + 3]] = arr[arr[current + 1]] * arr[arr[current + 2]];
            opcode = arr[current + 4];
            current += 4;
        }
    }
    return arr.join(',')
}

let output = execute(input);

fs.writeFileSync('./input.txt', output);


module.exports = execute;
