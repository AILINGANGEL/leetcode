# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        # 如果只有一个节点或者没有节点，则直接返回
        if head and head.next:
            cur = head.next
            head.next = None  # 处理第一个节点，让其next指向None
            while cur:
                next = cur.next #记录当前节点的下一个节点
                cur.next = head #让当前节点指向头节点
                head = cur #让头节点指向当前节点
                cur = next #继续移动当前节点到下一个节点
        return head
