# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = node = ListNode(0)
        dummy.next = head
        curr = point = head
        index = 0
        
        while True:
            count = 0
            while point and count < k:
                point = point.next
                count += 1
                
            if count == k:
                prev, t = point, curr
                for _ in range(k):
                    tmp = t.next
                    t.next = prev
                    prev = t
                    
                    t = tmp
                
                node.next = prev
                node = curr
                curr = point
            else:
                return dummy.next
                
        