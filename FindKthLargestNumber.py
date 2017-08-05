class Solution(object):
    def swap(self, array, i, j):
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    def partition(self, array, l, r):
        if l < r:
            p = array[l]
            i = l + 1
            j = r
            while i<=j:
                while i<=r and array[i] <= p:
                    i = i + 1
                while j>l and array[j] > p:
                    j = j - 1
                if i <= j:
                    self.swap(array, i, j)
            self.swap(array, l, j)
            return j
        else: 
            return l

    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        s = self.partition(nums, 0, len(nums)-1)
        print s
        if s == len(nums)-k:
            return nums[s]
        elif s < len(nums)-k:
            nums = nums[s+1:]
            return self.findKthLargest(nums, k)
        else:
            nk = len(nums) - k
            nums = nums[0:s]
            return self.findKthLargest(nums, len(nums)-nk)



test = [99, 99]
k = 1

print Solution().findKthLargest(test, k)