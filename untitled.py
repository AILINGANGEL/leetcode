class Node:
    def __init__(self, v):
        self.value = v
        self.next = None



class Stack:
    def __init__(self):
        self.data = []

    def push(self, v):
        self.data.append(v)

    def pop(self):
        tail = self.data[-1]
        self.data = self.data[:-1]
        return tail

    def length(self):
        return self.data.length


class Queue:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None


    def push(self, v):
        if not self.head:
            self.head = Node(v)
            self.tail = self.head
        else:
            temp = Node(v)
            self.tail.next = temp
            self.tail = temp

        self.length += 1

    def pop(self):
        if self.queue:
            temp = self.head
            self.head = self.head.next
            self.length -= 1
            return temp 
        else:
            return None

    def top(self):
        return self.tail 
