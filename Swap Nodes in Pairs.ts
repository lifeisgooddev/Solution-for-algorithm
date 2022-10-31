/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function swapPairs(head: ListNode | null): ListNode | null {
    
    if(!head || !head.next)
        return head;
    
    let node: ListNode; 
    let point:ListNode;
    node = point = new ListNode(0);
    
    
    while(true) {
        if(!head.next){
            point.next = head;
            break;
        }
        point.next = head.next;
        let prev:ListNode = new ListNode(head.val);
        head = head.next.next;
        point.next.next = prev;
        point = point.next.next;
        if(!head)
            break;
    }
    
    return node.next;
};