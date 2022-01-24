function constructNote(message, letters) {
    const box = {};

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        box[letter] ? box[letter]++ : box[letter] = 1
    }

    for (let i = 0; i < message.length; i++) {
        const messageWord = message[i];
        if (!box[messageWord]) return false;
        box[messageWord]--;
    }

    return true;
}

constructNote('aa', 'abc');
constructNote('abc', 'dcba');
constructNote('aabbcc', 'bcabcaddff');
