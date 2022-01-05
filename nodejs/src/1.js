const parseWordToHashMap = (word) => {
    const map = {};
    word.split('').forEach(letter => {
        map[letter] ? map[letter]++ : map[letter] = 1;
    });
    return map;
};

const validAnagram = (firstWord, secondWord) => {
    if (firstWord.length !== secondWord.length) return false;
    const firstMap = parseWordToHashMap(firstWord);
    const isInvalidAnagram = secondWord.split('').some(letter => {
        if (!firstMap[letter]) return true;
        firstMap[letter]--;
        return false;
    });
    
    const isValidAnagram = !isInvalidAnagram;
    return isValidAnagram;
};

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');
validAnagram('awesome', 'awesom');
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
validAnagram('qwerty', 'qeywrt');
validAnagram('texttwisttime', 'timetwisttext');