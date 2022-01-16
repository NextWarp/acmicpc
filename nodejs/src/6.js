function isSubsequence(firstWord, secondWord) {
    const firstWords = firstWord.split("");
    const secondWords = secondWord.split("");

    let i = 0;
    let j = 0;

    while (i < firstWords.length && j < secondWords.length) {
        if (secondWords[j] === firstWords[i]) {
            i++;
        }
        j++;
    }

    return firstWords.length === i;
}

isSubsequence('hello', 'hello world');
isSubsequence('sing', 'string');
isSubsequence('abc', 'abracadabra');
isSubsequence('abc', 'acb');