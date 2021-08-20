class Factorial():
    # method requires the n value
    def calculate(self, n):
        if n == 0 or n == 1: # default for factorial, if n == 0 or 1, the result must be 1
            return 1

        total = 0
        i = n

        while i > 1: # we are going to start the algorithm backwards
            # total is equal to the execution number * execution number - 1 if its the first loop
            # total is equal to total * execution number - 1 if has runned the loop already
            total = i * ( i - 1 ) if i == n else total * (i - 1)
            i -= 1 # decreases the i number
        return total


f = Factorial()
f.calculate(5)