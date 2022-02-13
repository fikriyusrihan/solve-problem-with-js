/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0, null);
  let head = new ListNode(0, dummy);
  while (list1 && list2) {
    if (list1.val < list2.val) {
      let node = new ListNode(list1.val, null);
      dummy.next = node;
      dummy = node;

      list1 = list1.next;
    } else {
      let node = new ListNode(list2.val, null);
      dummy.next = node;
      dummy = node;

      list2 = list2.next;
    }
  }

  while (list1) {
    let node = new ListNode(list1.val, null);
    dummy.next = node;
    dummy = node;

    list1 = list1.next;
  }

  while (list2) {
    let node = new ListNode(list2.val, null);
    dummy.next = node;
    dummy = node;

    list2 = list2.next;
  }

  return head.next.next;
};
