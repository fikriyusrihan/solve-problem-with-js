/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) return false;

    start++;
    end--;
  }

  return true;
};
