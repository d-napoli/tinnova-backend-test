class BubbleSort():
    def __init__(self, vector = []):
        self.vector = [5, 3, 2, 4, 7, 1, 0, 6] if vector == [] else vector
        pass

    def sorting(self):
        array_size = len(self.vector)
        k = 0

        got_in = True

        while k < array_size - 1 and got_in:
            j = 0
            max_exec = array_size - 1 if k == 0 else array_size - (k + 1)
            while j < max_exec:
                if self.vector[j] > self.vector[j + 1]:
                    self.vector[j], self.vector[j + 1] = self.vector[j + 1], self.vector[j]
                    got_in = True
                j += 1

            got_in = False if not got_in else got_in
            k += 1

        return self.vector

b = BubbleSort()
print(b.sorting())