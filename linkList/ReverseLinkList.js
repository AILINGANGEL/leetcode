var reverseList = function(head) {
    if (head && head.next) {
       let cur = head.next;
       head.next = null;
       while(cur) {
           let next = cur.next;
           cur.next = head;
           head = cur;
           cur = next;
       }
    }
    return head;
};


// leetcode 递归解法
var reverseList = function(head) {
  if (head === null || head.next === null) 
    return head;
  var p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}