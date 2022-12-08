class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        res = []
        path = []
        self.dfs(candidates, target, path, res)
        return res
    
    def dfs(self, nums, remain, path, res):
        if remain < 0:
            return
        elif remain == 0:
            res.append(path)
        else:
            
            for i in range(len(nums)):
                self.dfs(nums[i:], remain - nums[i], path+[nums[i]], res)