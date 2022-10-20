/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length > nums2.length)
        return findMedianSortedArrays(nums2, nums1);
    
    let median:number = 0;
    
    let x:number = nums1.length;
    let y:number = nums2.length;
    let start:number = 0;
    let end:number = x;
    
    while(start <= end) {
        const positionX:number = Math.floor((start + end) / 2);
        const positionY:number = Math.floor((x + y + 1) / 2 - positionX);
        
        const leftX:number = positionX == 0 ? -10000000000 : nums1[positionX - 1];
        const leftY:number = positionY == 0 ? -10000000000 : nums2[positionY - 1];
        const rightX:number = positionX == x ? 10000000000 : nums1[positionX];
        const rightY:number = positionY == y ? 10000000000 : nums2[positionY];
        
        if(leftX <= rightY && leftY <= rightX) {
            if((x + y) % 2 == 0){
                median = (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
            } else {
                median = Math.max(leftX, leftY);
            }
            break;
        } else if (leftY > rightX) {
            start = positionX + 1;
        } else {
            end = positionX - 1;
        }
    }
    
    return median;
};
