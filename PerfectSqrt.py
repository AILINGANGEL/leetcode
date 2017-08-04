#利用二分的思想
class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        low = 0
        high = num
        if num == 1: return True
        while (low<=high):
            medium = (low + high) /2
            if medium * medium == num:
                return True
            elif medium * medium > num:
                high = medium - 1
            else:
                low = medium + 1
        return False
        
        
