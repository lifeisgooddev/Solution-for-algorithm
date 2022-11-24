class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        n = len(nums)
        return self.binarySearch(nums, 0, n, target)
    def binarySearch(self, nums: List[int], start: int, end: int, target: int):
        if end > start:
            mid = start + int((end - start) / 2)
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                return self.binarySearch(nums, mid + 1, end, target)
            else:
                return self.binarySearch(nums, start, mid, target)
        else:
            return start
        
            
        