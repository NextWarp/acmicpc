const fs = require('fs');
const env = process.env.APP_ENV;
const inputURI = env === 'local' ? 'src/1006' : '/dev/stdin';
const input = fs.readFileSync(inputURI).toString().split('\n');
const [zeroLine] = input;
const testCaseLength = parseInt(zeroLine, 10);

const solution = (n, w, locationNs, location2Ns) => {
    let result = [];

    for (let i = 0; i < n; i++) {
        const leftIndex = i === 0 ? n - 1 : i - 1;
        const rightIndex = i === n - 1 ? 0 : i + 1;

        const bottomEnemies = locationNs[i];
        const topEnemies = location2Ns[i];
        
        const bottomLeftEnemies = locationNs[leftIndex];
        const bottomRightEnemies = locationNs[rightIndex];

        const topLeftEnemies = location2Ns[leftIndex];
        const topRightEnemies = location2Ns[rightIndex];

        const canDuoBottomTop = bottomEnemies + topEnemies <= w;
        const canDuoBottmLeft = bottomEnemies + bottomLeftEnemies <= w;
        const canDuoBottomRight = bottomEnemies + bottomRightEnemies <= w;

        const canDuoTopRight = topEnemies + topLeftEnemies <= w;
        const canDuoTopLeft = topEnemies + topRightEnemies <= w;

        const currentLocation = i + 1;
        if (canDuoBottomTop) {
            result.push([currentLocation, currentLocation  + w]);
        }

        if (canDuoBottmLeft) {
            result.push([currentLocation, leftIndex + 1]);
        }

        // const cannotDuoBottom = !(canDuoBottomTop || canDuoBottmLeft || canDuoBottomRight);
        // const cannotDuoTop = !(canDuoBottomTop || canDuoTopLeft || canDuoTopRight);
    }

    console.log(result);
}

for (let i = 0; i < testCaseLength; i++) {
    const targetIndex = i * 3;
    const firstLine = input[targetIndex + 1];
    const secondLine = input[targetIndex + 2];
    const thirdLine = input[targetIndex + 3];
    const [n, w] = firstLine.split(' ');
    const locationNs = secondLine.split(' ');
    const location2Ns = thirdLine.split(' ');

    solution(
        parseInt(n, 10),
        parseInt(w, 10),
        locationNs.map(locationN => parseInt(locationN, 10)),
        location2Ns.map(location2N => parseInt(location2N, 10))
    );
}
