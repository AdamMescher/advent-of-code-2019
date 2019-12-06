const range = [172851, 675869];


const totalMatchingPasswords = (range) => {
    const isSixDigits = (num) => (num).toString().length === 6;
    const isWithinRange = (num, range) => num > range[0] && num < range[1];
    const hasAdjacentDigits = (num) => {
        const split = num.toString().split('');
        for (let i = 0; i < split.length; i++) {
          if (split[i] === split[i + 1]) { return true; }
        }
        return false;
    }
    const digitsNeverDecrease = (num) => {
        const split = num.toString().split('');
        for (let i = 0; i < split.length; i++) {
          if (split[i] > split[i + 1]) { return false; }
        }
        return true;
      }
    let counter = 0;
    for (let i = range[0]; i < range[1]; i++) {
        (isSixDigits(i) && isWithinRange(i, range) && hasAdjacentDigits(i) && digitsNeverDecrease(i)) ? counter++ : null;
    }
    console.log(`Total Matching Passwords: ${counter}`);
    return counter;
}

totalMatchingPasswords(range);
