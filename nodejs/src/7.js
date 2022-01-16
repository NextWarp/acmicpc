function maxSubarraySum(arr, count){
    let result = 0;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        result += arr[i];
    }
    
    if (Number.isNaN(result)) return null;
    sum = result;
    for (let i = count - 1; i < arr.length - count + 1; i++) {
        let currentSum = sum - arr[i - count + 1] + arr[i + 1];
        
        sum = currentSum;
        if (currentSum > result) {
            result = currentSum;
        }
    }

    console.log(result);
    return result;
}

maxSubarraySum([100,200,300,400], 2);
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);
maxSubarraySum([-3,4,0,-2,6,-1], 2);
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2);
maxSubarraySum([2,3], 3);