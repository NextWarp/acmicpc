const fs = require('fs');
const env = process.env.APP_ENV;
const inputURI = env === 'local' ? 'src/1120' : '/dev/stdin';
const input = fs.readFileSync(inputURI).toString().replaceAll('\r\n', '\n').split('\n');

const [data] = input;

const [firstWord, secondWord] = data.split(' ');

const lengthDiff = secondWord.length - firstWord.length

let minDiffCount = Infinity;

for (let i = 0; i <= lengthDiff; i++) {
    let tempDiffCount = 0;
    for (let j = i; j < secondWord.length - (lengthDiff - i); j++) {
        const firstWordIndex = j - i;
        const fLetter = firstWord[firstWordIndex]
        const sLetter = secondWord[j];
        if (fLetter !== sLetter) {
            tempDiffCount++;
        }
    }

    if (minDiffCount > tempDiffCount) {
        minDiffCount = tempDiffCount;
    }
}

console.log(minDiffCount)