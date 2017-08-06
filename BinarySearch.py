
class BinarySearch:
    def search(self, array, k):
        lo = 0
        hi = len(array) -1
        while lo <= hi:
            mid = (lo + hi) /2
            if array[mid] == k:
                return mid
            elif array[mid] < k:
                lo = mid + 1
            else:
                hi = mid -1
        return -1

test = [1,2,3,4,5]
binarySearch = BinarySearch()

print binarySearch.search(test, 3)