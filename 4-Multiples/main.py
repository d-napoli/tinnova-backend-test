class Multiples():   
    def calculate_multiples_until_n(self, n):
        i = 1
        total = 0

        while i < n: # while until n
            if i % 3 == 0 or i % 5 == 0: # if the number mod 3 or 5 == 0 it means that the curr number is multiple of 5 or 3
                total += i # increases the total count
            i += 1 # increases count variable
        return total # return the total


m = Multiples()
m.calculate_multiples_until_n(10)