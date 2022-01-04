const parseWordToHashMap = (word) => {
    const map = {};
    word.split('').forEach(letter => {
        if (!map[letter]) {
            map[letter] = 1;
            return;
        }
        map[letter]++;
    });

    return map;
};

const validAnagram = (firstWord, secondWord) => {
    

    if (firstWord.length !== secondWord.length) return false;
    const firstMap = parseWordToHashMap(firstWord);
    const secondMap = parseWordToHashMap(secondWord);

    const invalidAnagram = Object.keys(firstMap).some(letter => firstMap[letter] !== secondMap[letter]);
    const isValidAnagram = !invalidAnagram;
    
    console.log(isValidAnagram);
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