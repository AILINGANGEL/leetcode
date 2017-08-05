# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        most = head
        prev = ListNode(0)
        prev.next = head
        if head and head.next:
            pos = 1
            while pos < m:
                pos += 1
                prev = head
                head = head.next
            cur = head.next
            temp = head
            while cur and pos < n:
                pos += 1
                next = cur.next
                cur.next = head
                head = cur
                cur = next
            prev.next = head
            temp.next = cur
        if m == 1:
            return prev.next
        else:
            return most
