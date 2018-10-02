### 数组
题号           | 解题思路  | 难度
------------- | ------------- |  ------------- |
268 [Missing Number](https://leetcode-cn.com/problems/missing-number/description) | 求出正确的总和然后减去数组里面值的和, 第二种方法用异或运算
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
35[搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/description/)||easy
724[寻找数组的中心索引](https://leetcode-cn.com/problems/find-pivot-index/description/) | |easy
169[求众数](https://leetcode-cn.com/problems/majority-element/description/)|1.map 2.排序 3.Boyer-Moore Voting Algorithm|easy
229 [求众数2](https://leetcode-cn.com/problems/majority-element-ii/description/)|boyer-Moore 因为要求数字出现的个数大于数组长度的1/3,所以顶多会有两个这样的数，记录每个候选数字的个数，最后再检查候选数字的出现数字是否大于数组长度的1/3| medium
219 [存在重复元素2](https://leetcode-cn.com/problems/contains-duplicate-ii/description/)||easy



### 字符串

题号           | 解题思路 |  难度
------------- | ------------- | ------------- |
387 [字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/) | |easy
7 [反转整数](https://leetcode-cn.com/problems/reverse-integer/description/) | 利用字符串反转, 利用数字除以10取余或者取正 | easy
242 [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/) | |easy
125 [验证回文串](https://leetcode-cn.com/problems/valid-palindrome/description/) |两种方法：1.双指针法 2.字符串反转之后再判断| easy
8 [字符串转整数](https://leetcode-cn.com/problems/string-to-integer-atoi/description/) |js中的parseInt| medium
28 [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/description/)||easy
14[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/description/)||easy
38 [报数](https://leetcode-cn.com/problems/count-and-say/description/)||easy
67 [二进制求和](https://leetcode-cn.com/problems/add-binary/description/) | |easy
151 [反转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/description/)|1.js一行代码|medium
557 [反转字符串中的单词3](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/)|js一行代码|easy
191 [位1的个数](https://leetcode-cn.com/submissions/detail/5648976/)||easy
709 [转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/description/)||easy
657 [判断路线成圈](https://leetcode-cn.com/problems/judge-route-circle/description/)||easy
771 [宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/description/)||easy
415 [字符串相加](https://leetcode-cn.com/problems/add-strings/description/)||easy
500 [键盘行](https://leetcode-cn.com/problems/keyboard-row/description/)||easy
20 [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)|利用栈|easy



### 双指针

题号           | 解题思路 |  难度
------------- | ------------- | ------------- | 
209[长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/) | | medium
485 [最大连续1的个数](https://leetcode-cn.com/problems/max-consecutive-ones/description/)|两种解法,第二种双指针方法| easy
344 [反转字符串](https://leetcode-cn.com/problems/reverse-string/description/) | 三种解法 | easy
561 [数组拆分](https://leetcode-cn.com/problems/array-partition-i/description/)||easy
167 [两数之和2-输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/) || easy
28 [Remove Element](https://leetcode-cn.com/problems/remove-element/description/) | 双指针法| easy 




### 链表

题号           | 解题思路 |  难度
------------- | ------------- | -------------|
237[删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/description/) |因为无法访问这个节点的上一个节点，所以用当前节点的下一个节点来替换当前节点的内容，然后删除下一个节点| easy
19[删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/)|1.两次循环，第一次找出链表的长度 2.一次循环，初始化fast结点为距离头结点的第n个结点，然后开始以one step的速度同时移动fast和slow结点直到fast结点指向队尾的结点，这个时候slow就是指向的要删除的第n个结点的前一个结点|medium
206[反转链表](https://leetcode-cn.com/problems/reverse-linked-list/description/) |注意这个题的递归解法| easy
26 [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/description/) || easy
27 [回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/description/)|1.遍历借助数组 2.反转后半部分链表 |easy
707 [设计链表](https://leetcode-cn.com/problems/design-linked-list/description/)|| easy
141 [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/description/)|双指针(快指针+慢指针)|easy
160 [相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/)|1.暴力法 2.hashset(java, js没有这种数据结构) 3.到达链表结尾的时候交换开始的位置再继续(excellent solution)|easy
203 [删除链表中的节点](https://leetcode-cn.com/problems/remove-linked-list-elements/description/)|1.一次while循环|easy
328 [奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/description/)||medium
2 [两数相加](https://leetcode-cn.com/problems/add-two-numbers/description/)||easy
61 [旋转链表](https://leetcode-cn.com/problems/rotate-list/description/)||medium
747 [至少是其他数字两倍的最大数](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/description/) ||easy
83 [删除排序链表的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/)||easy
876 [链表的中间节点](https://leetcode-cn.com/problems/middle-of-the-linked-list/description/)|双指针|easy




### 排序和查找

题号           | 解题思路 |  难度
------------- | ------------- | ------------- | 
88 [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/description/)|| easy


### 栈和队列

题号           | 解题思路 |  难度
------------- | ------------- | ------------- | 
622 [设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/description/)||medium


### 二叉树

题号           | 解题思路 |  难度
------------- | ------------- | ------------- |
104 [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/) |递归| easy
111 [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/1) |树的广度遍历| easy
102 [二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/)|queue| medium
101 [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/description/)|将树自己和自己进行对比, 自己的左子树等于自己的右子树| easy
100 [相同的树](https://leetcode-cn.com/problems/same-tree/description/) || easy
102 [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/description/)|1.递归解法 2.循环遍历解法|easy
98 [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/description/)|中序遍历(递归 and 循环遍历)|medium
94 [二叉树中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/)|1.递归 2.循环遍历| medium
700 [二叉搜索树中的搜索](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/description/)|1.递归 2.循环遍历| easy
144 [二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/)|1.递归 2.循环遍历|medium
145 [二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/)|1.递归 2.循环遍历|hard
701 [二叉树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/description/)|1.循环遍历 2.递归解法|medium
405 [删除二叉搜索树中的节点](https://leetcode-cn.com/problems/delete-node-in-a-bst/description/)|1.循环解法 2.递归解法|medium
872 [叶子相似树](https://leetcode-cn.com/problems/leaf-similar-trees/description/)|递归|easy
226 [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/description/)|递归|easy
703[数据流中第k大个元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/description/)|!!!!!!!!!!!!!!(复习)构造一个只包含k个元素的最小堆，那么堆顶就是要求的第k大个元素.|easy
563 [二叉树的坡度](https://leetcode-cn.com/problems/binary-tree-tilt/description/)|递归|easy
257 [二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/description/)|递归|easy
572 [另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/description/)|数的遍历|easy
653 [两数之和-输入BST](https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/)|1.中序遍历|easy
671 [二叉树中第二小的节点](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/)||easy


### 二分查找

题号           | 解题思路 |  难度
------------- | ------------- | ------------- |
162 [寻找峰值]()|1.遍历一 2.二分查找（循环）3.递归|medium
852 [山脉数组的峰顶索引](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/description/)||easy
704 [二分查找](https://leetcode-cn.com/problems/binary-search/description/)|1.循环遍历 2.递归|easy
69 [x的平方根](https://leetcode-cn.com/problems/sqrtx/description/)||easy



### 其他
题号           | 解题思路 |  难度
------------- | ------------- | ------------- |
190 [颠倒二进制位](https://leetcode-cn.com/problems/reverse-bits/)||easy