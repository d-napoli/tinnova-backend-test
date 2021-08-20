class BubbleSort():
    def __init__(self, vector = []):
        self.vector = [5, 3, 2, 4, 7, 1, 0, 6] if vector == [] else vector

    def sorting(self):
        array_size = len(self.vector) # what is the size of the provided array?
        k = 0

        got_in = True # variable control, if this is False after the end of the outside loop, it means that we have sorted everything already

        while k < array_size - 1 and got_in:
            j = 0

            # the max of executions for each loop depends on how much we have sorted the array yet
            # once the bigger numbers are already in the end
            # we don't need to go all the way to the end, this variable makes the algorithm optimizer, since it will have less executions
            max_exec = array_size - 1 if k == 0 else array_size - ( k + 1 )
            while j < max_exec: # while j is less than the max of executions for this loop
                if self.vector[j] > self.vector[j + 1]: # if the curr number is bigger than the next one
                    self.vector[j], self.vector[j + 1] = self.vector[j + 1], self.vector[j] # swap the array numbers
                    got_in = True
                j += 1

            got_in = False if not got_in else got_in # if we didn't get inside the if, it means that is everything already sorted, which means that we can already stop the loop
            k += 1

        return self.vector # return the vector

b = BubbleSort()
print(b.sorting())