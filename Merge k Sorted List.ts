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

 function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let interval:number = 1;
    let amount:number = lists.length;
    
    while(interval < amount) {
        for(let i:number = 0; i < amount - interval; i += interval * 2){
            lists[i] = merge2Lists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }
    return amount > 0 ? lists[0] : null;
};

function merge2Lists(l1:ListNode | null, l2:ListNode | null): ListNode | null {
    let head:ListNode;
    let point:ListNode;
    head = point = new ListNode(0);
    console.log(l1, l2)
    while(l1 && l2) {
        if(l1.val < l2.val) {
            point.next = l1;
            l1 = l1.next;
        } else {
            point.next = l2;
            l2 = l2.next;
        }
        point = point.next;
    }
    if (!l1)
        point.next = l2;
    else 
        point.next = l1;
    
    return head.next;
    
}