/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let dummy = null;
  let pointer = head;

  while (pointer) {
    let list = new ListNode(pointer.val, dummy);
    dummy = list;

    pointer = pointer.next;
  }

  return dummy;
};
