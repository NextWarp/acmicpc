function sameFrequency(firstNumber, secondNumber){
    const firstWord = String(firstNumber);
    const secondWord = String(secondNumber);

    const map = {};

    firstWord.split("").forEach(letter => {
        map[letter] ? map[letter]++ : (map[letter] = 1);
    });

    const isInvalidWord = secondWord.split("").some(letter => {
        if (!map[letter]) return true;
        map[letter]--;
    });

    console.log(!isInvalidWord);
    return !isInvalidWord;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
