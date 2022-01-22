const fs = require('fs');
const env = process.env.APP_ENV;
const inputURI = env === 'local' ? 'src/108125' : '/dev/stdin';
const input = fs.readFileSync(inputURI).toString().replaceAll('\r\n', '\n').split('\n')

const parseReadLine = (line) => line.split(' ').map(n => parseInt(n, 10));

const solution = (N, myCards, M, researchCards) => {
    myCards.sort((a, b) => a - b);
    const result = researchCards.map(targetCard => {
        let start = 0;
        let end = myCards.length - 1;
        while (true) {
            if (start > end) return 0;
            let pointer = Math.floor((start + end) / 2);
            if (targetCard === myCards[pointer]) {
                return 1;
            }

            if (targetCard < myCards[pointer]) {
                end = --pointer;
            }

            if (targetCard > myCards[pointer]) {
                start = ++pointer;
            }
        }
    });

    console.log(result.join(' '));
}

const [N, myCards, M, researchCards] = input;
solution(N, parseReadLine(myCards), M, parseReadLine(researchCards));