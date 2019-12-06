const isSixDigits = (num) => (num).toString().length === 6;
const isWithinRange = (num, range) => num > range[0] && num < range[1];
const hasAdjacentDigits = (num) => {
  const split = num.toString().split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[i + 1]) {
      return true;
    }
  }
  return false;
}
const digitsNeverDecrease = num => {
  const split = num.toString().split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] > split[i + 1]) { return false; }
  }
  return true;
}
const adjacentDigitNotPartOfOddGroupSize = num => {
  const split = num.toString().split('');
  for (let i = 0; i < split.length; i++) {
    const groupOfSix = split[i] === split[i + 1] && split[i] === split[i + 2] && split[i] === split[i + 3] && split[i] === split[i + 4] && split[i] === split[i + 5];
    const groupOfFive = split[i] === split[i + 1] && split[i] === split[i + 2] && split[i] === split[i + 3] && split[i] === split[i + 4];
    const groupOfFour = split[i] === split[i + 1] && split[i] === split[i + 2] && split[i] === split[i + 3];
    const groupOfThree = split[i] === split[i + 1] && split[i] === split[i + 2];
    const groupOfTwo = split[i] === split[i + 1];

    if (groupOfSix) { return true; }
    else if (groupOfFive) { return false; }
    else if (groupOfFour) { i += 3; }
    else if (groupOfThree) { return false; }
    else if (groupOfTwo) { i += 1;}
  }
  return true;
}
const totalMatchingPasswordsPartOne = range => {
  let counter = 0;
  for (let i = range[0]; i <= range[1]; i++) {
    if(isSixDigits(i) &&
      isWithinRange(i, range) &&
      hasAdjacentDigits(i) &&
      digitsNeverDecrease(i)) {
        counter += 1;
    }
  }
  console.log(`Total Matching Passwords (Part 1): ${counter}`);
  return counter;
}
const totalMatchingPasswordsPartTwo = () => {
  let counter = 0;
  const rejected = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if(isSixDigits(i) &&
      isWithinRange(i, range) &&
      hasAdjacentDigits(i) &&
      digitsNeverDecrease(i) &&
      adjacentDigitNotPartOfOddGroupSize(i)) {
        counter += 1;
    }
  }
  console.log(`Total Matching Passwords (Part 1): ${counter}`);
  return counter;
}

// PART ONE
const range= [172851, 675869];
totalMatchingPasswordsPartOne(range);
totalMatchingPasswordsPartTwo(range);
