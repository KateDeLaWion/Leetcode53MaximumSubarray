//Solution 1 with O(n)
let maxSum = nums[0];
let currentSum = 0;
for (let i = 0; i < nums.length; i++) {
  currentSum += nums[i];
  maxSum = Math.max(maxSum, currentSum);
  currentSum = Math.max(currentSum, 0);
}
return maxSum;

//Solution 2 divide and conquer with O(nlogn)
var maxSubArray = function(nums) {
    return findMaxSubArray(nums, 0, nums.length - 1);
    }
    
    
    function findMaxSubArray(nums, left, right) {
        if (left === right) {
            return nums[left];
        }
        const mid = Math.floor((left + right) / 2);
        const leftMaxSum = findMaxSubArray(nums, left, mid);
        const rightMaxSum = findMaxSubArray(nums, mid + 1, right);
        const crossMaxSum = findCrossMaxSum(nums, left, mid, right);
        return Math.max(leftMaxSum, rightMaxSum, crossMaxSum);
    }
    
    
    function findCrossMaxSum(nums, left, mid, right) {
        let leftSum = -Infinity;
        let rightSum = -Infinity;
        let sum = 0;
        for (let i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
    
        sum = 0;
    
        for (let i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
    
        return leftSum + rightSum;
    };

