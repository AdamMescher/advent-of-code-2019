const execute = (arr) => {
    let opcode = arr[0];
    let current = 0;
    while (opcode !== 99) {
        if (opcode === 1) {
            arr[arr[current + 3]] = arr[arr[current + 1]] + arr[arr[current + 2]];
            opcode = arr[current + 4];
            current += 4;
        } else if (opcode === 2) {
            arr[arr[current + 3]] = arr[arr[current + 1]] * arr[arr[current + 2]];
            opcode = arr[current + 4];
            current += 4;
        } else if (opcode === 3) {
            
        }
        } else if (opcode === 4) {}
    }
    return arr.join(',')
}