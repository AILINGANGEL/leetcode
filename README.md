题号           | 解题思路 
------------- | ------------- |
367 valid perfect sqrt  | 利用二分思想
206 Reverse Linked List | 链表反转,记录下一个节点
92 Reverse Linked List 2 | 链表反转2, 注意Pos的值
215 Kth Largest Element in an Array    | 利用partition思想
88 Merge Sorted Array | 从后往前塞入数据 

### 数组
题号           | 解题思路  | 难度
------------- | ------------- |  ------------- |
268 [Missing Number](https://leetcode-cn.com/problems/missing-number/description) | 求出正确的总和然后减去数组里面值的和, 第二种方法用异或运算
28 [Remove Element](https://leetcode-cn.com/problems/remove-element/description/) | 
26 [Remove Duplicates from Sorted Array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/) | 双指针解法
122 [Best Time to Buy and Sell Stock 2](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/) |xxx |
9 [回文数](https://leetcode-cn.com/problems/palindrome-number/description/) | 
189 [旋转数组](https://leetcode-cn.com/submissions/detail/3199872/) | 
1[两数之和](https://leetcode-cn.com/problems/two-sum/description/) | 利用Object来降低时间复杂度
217 [存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/description/) | 暴力法（没写）, 先排序,利用object|
136 [只出现一次的数字](https://leetcode-cn.com/problems/single-number/description/) | 利用异或运算,因为同一个数字和自己异或得到的结果是0,0和任何数字进行异或运算得到另一个数字
350 [两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/) | 1.利用js对象 2.排序
351 [加1](https://leetcode-cn.com/problems/plus-one/description/) | 
36 [有效的数独](https://leetcode-cn.com/problems/valid-sudoku/description/) | 注意判断三个格子 | 中等
283 [移动0](https://leetcode-cn.com/problems/move-zeroes/description/) | 三种解法
48[旋转图像](https://leetcode-cn.com/problems/rotate-image/description/) |  | 中等




### 字符串

题号           | 解题思路 |  难度
------------- | ------------- | -------------
344 [反转字符串](https://leetcode-cn.com/problems/reverse-string/description/) | 三种解法 | easy
387 [字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/) | |easy
7 [反转整数](https://leetcode-cn.com/problems/reverse-integer/description/) | 利用字符串反转, 利用数字除以10取余或者取正 | easy
242 [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/) | |easy
125 [验证回文串](https://leetcode-cn.com/problems/valid-palindrome/description/) |两种方法：1.双指针法 2.字符串反转之后再判断| easy
8 [字符串转整数](https://leetcode-cn.com/problems/string-to-integer-atoi/description/) |js中的parseInt| medium
28 [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/description/)||easy
14[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/description/)||easy
38 [报数](https://leetcode-cn.com/problems/count-and-say/description/)||easy


### 链表
题号           | 解题思路 |  难度
------------- | ------------- | -------------
237[删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/description/) |因为无法访问这个节点的上一个节点，所以用当前节点的下一个节点来替换当前节点的内容，然后删除下一个节点| easy
19[删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/)||medium
206[反转链表](https://leetcode-cn.com/problems/reverse-linked-list/description/) |注意这个题的递归解法| easy
26 [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/description/) || easy
27 [回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/description/)|1.遍历借助数组|easy


##排序和查找
题号           | 解题思路 |  难度
------------- | ------------- | -------------
88 [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/description/)|| easy
