function averagePair(arr, average){
    const fullNumber = average * 2;
    if (!Number.isInteger(fullNumber) || arr.length <= 0) return false;
    
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];
        if (sum < fullNumber) {
            left++;
        } else if (sum > fullNumber) {
            right--;
        } else {
            return true;
        }
    }

    return false;
}

averagePair([1,2,3], 2.5);
averagePair([1,3,3,5,6,7,10,12,19], 8);
averagePair([-1,0,3,4,5,6], 4.1);
averagePair([], 4);