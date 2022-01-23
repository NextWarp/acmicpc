const fs = require('fs');
const env = process.env.APP_ENV;
const inputURI = env === 'local' ? 'src/1920' : '/dev/stdin';
const input = fs.readFileSync(inputURI).toString().replaceAll('\r\n', '\n').split('\n');

const parseReadLine = (line) => line.split(' ').map(n => parseInt(n, 10));

const solution = (N, A, M, B) => {
    A.sort((a, b) => a - b);
    const foundMap = {};
    B.forEach(targetCard => {
        let start = 0;
        let end = A.length - 1;
        if (foundMap[targetCard]) return console.log(foundMap[targetCard]);
        while (true) {
            if (start > end) {
                foundMap[targetCard] = "0";
                return console.log(0);
            }
            let pointer = Math.floor((start + end) / 2);
            if (targetCard === A[pointer]) {
                foundMap[targetCard] = "1";
                return console.log(1);
            }

            if (targetCard < A[pointer]) {
                end = --pointer;
            }

            if (targetCard > A[pointer]) {
                start = ++pointer;
            }
        }
    });
}

const [N, A, M, B] = input;
solution(N, parseReadLine(A), M, parseReadLine(B));