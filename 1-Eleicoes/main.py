class Elections:
    def __init__(self):
        self.total_voters = 1000
        self.valid_votes = 800
        self.blank_votes = 150
        self.null_votes = 50

    def percent_valid_votes(self):
        return (self.valid_votes * 100) / self.total_voters

    def percent_white_votes(self):
        return (self.blank_votes * 100) / self.total_voters

    def percent_null_votes(self):
        return (self.null_votes * 100) / self.total_voters
    
e = Elections()
print(e.percent_valid_votes())
print(e.percent_white_votes())
print(e.percent_null_votes())