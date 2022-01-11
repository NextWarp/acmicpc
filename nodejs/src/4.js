function areThereDuplicates(...args) {
    const map = {};
    const isDuplicated = args.some(arg => {
        map[arg] ? map[arg]++ : (map[arg] = 1);
        if (map[arg] > 1) return true;
    })

    return isDuplicated;
}

areThereDuplicates(1, 2, 3);
areThereDuplicates(1, 2, 2);
areThereDuplicates('a', 'b', 'c', 'a');
areThereDuplicates(1, 2, 3, 4, 1, 5, 6);