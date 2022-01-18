function minSubArrayLen(arr, number) {
    const slidingWindow = (arr, count, number) => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += arr[i];
        }

        if (sum >= number) {
            return true;
        }

        for (let i = 0; i < arr.length - count; i++) {
            let currentSum = sum - arr[i] + arr[i + count];
            sum = currentSum;
            if (currentSum >= number) {
                return true;
            }
        }

        return false;
    }
    
    for (let i = 1; i <= arr.length; i++) {
        const result = slidingWindow(arr, i, number);

        if (result) {
            console.log('result', i);
            return i;
        };
    }

    return 0;
}

minSubArrayLen([2,3,1,2,4,3],7);
minSubArrayLen([2,1,6,5,4],9);
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52);
minSubArrayLen([1,4,16,22,5,7,8,9,10],39);
minSubArrayLen([1,4,16,22,5,7,8,9,10],55);
minSubArrayLen([4,3,3,8,1,2,3],11);
minSubArrayLen([1,4,16,22,5,7,8,9,10],95);