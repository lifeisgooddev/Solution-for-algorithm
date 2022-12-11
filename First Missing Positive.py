class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        for i in range(n):
            if nums[i] <= 0 :
                nums[i] = n + 1
        for i in range(n):
            if abs(nums[i]) >0 and abs(nums[i]) <= n and nums[abs(nums[i]) - 1] > 0 :
                nums[abs(nums[i]) - 1] *= -1
        
        for i in range(n):
            if nums[i] >= 0:
                return i + 1
        
        return n + 1