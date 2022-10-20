/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

function fourSum(nums: number[], target: number): number[][] {
    if(nums.length == 0)
        return [];
    
    let map:Map<number, number> = new Map();
    
    nums.sort((a, b) => a - b);
    
    for(let i:number = 0; i < nums.length; i ++) {
        map.set(nums[i], i);
    }
    let result:number[][] = new Array();
    for(let i:number = 0; i < nums.length - 3; i ++) {
        if(i > 0 && nums[i] == nums[i-1])
            continue;
        let sum1:number = target - nums[i];
        for(let j:number = i+1; j < nums.length - 2; j ++) {
            if(nums[j] != nums[j-1] || j == i + 1)
            {
                let sum2 = sum1 - nums[j];
                for(let k:number = j+1; k < nums.length - 1; k ++) {
                    if(nums[k] != nums[k-1] || k == j + 1)
                    {
                        const l:number = map.get(sum2 - nums[k]);
                        if (l != undefined && l > k && i!=l && j!=l)
                        {
                            let num_array:number[] = new Array();
                            num_array.push(nums[i]);
                            num_array.push(nums[j]);
                            num_array.push(nums[k]);
                            num_array.push(nums[l]);
                            result.push(num_array);

                        }
                    }
                }
            }
                
        }
    }
    return result
};
