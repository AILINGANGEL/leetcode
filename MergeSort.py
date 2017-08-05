def merge(a, b, c):
    i = 0
    j = 0
    k = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            c[k] = a[i]
            i += 1
        else:
            c[k] = b[j]
            j +=1
        k +=1 
    while i < len(a):
        c[k] = a[i]
        i += 1
        k += 1
    while j < len(b):
        c[k] = b[j]
        j += 1
        k += 1


def merge_sort(array):
    if len(array) > 1:
        mid = len(array) /2
        half1 = array[0: mid]
        half2 = array[mid: ]
        merge_sort(half1)
        merge_sort(half2)
        merge(half1, half2, array)


test = [5,4,3,4]
merge_sort(test)
print test
