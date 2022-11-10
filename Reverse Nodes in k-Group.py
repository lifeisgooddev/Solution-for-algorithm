# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        node = ListNode(0)
        curr = point = head
        index = 0
        
        while True:
            count = 0
            while point and count < k:   # use r to locate the range
                point = point.next
                count += 1
                
            if count == k:
                prev = None
                for _ in range(k):
                    tmp = curr.next
                    curr.next = prev
                    prev = curr
                    
                    curr = tmp
                
                node.next = prev
                print(node)
            else:
                return node.next
                
        