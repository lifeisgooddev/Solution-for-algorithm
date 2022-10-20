/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

function threeSum(nums: number[]): number[][] {
    let map:Map<number, number> = new Map();
    nums.sort((a, b) => a - b);
    for(let i:number = 0; i < nums.length; i ++) {
        map.set(nums[i], i);
    }
    let result:number[][] = new Array();
    for(let i:number = 0; i < nums.length; i ++) {
        if(i > 0 && nums[i] == nums[i-1])
            continue;
        const sum1:number = 0 - nums[i];
        for(let j:number = i+1; j < nums.length; j ++) {
            if(nums[j] == nums[j-1] && j > i + 1)
                continue;
            const k:number = map.get(sum1 - nums[j]);
            if (k != undefined && k > j && i!=k)
            {
                let num_array:number[] = new Array();
                num_array.push(nums[i]);
                num_array.push(nums[j]);
                num_array.push(nums[k]);
                result.push(num_array);
                
            }
                
        }
    }
    return result
};


