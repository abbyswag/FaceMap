# data structure and algorithm implementation
import random

class DbHandler:
    def __init__(self):
        self.users = []
        self.votes = []
        self.careers = [
            'Developer','Programmer','Musician','Dancer','Painter','Enterprenuer'
        ]
        self.scoreBoard = [
            [5, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0],
            [0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 5]
        ]

    def addUser(self, name, image, email, career):
        self.users.append(
            {
                'name': name,
                'image':image,
                'email':email,
                'career': career,
                'score':0,
                'votedBy':0
            }
        )

    def addVote(self,whome,what):
        self.votes.append(
            (whome,what)
        )
        for user in self.users:
            if user['email'] == whome:
                user['votedBy'] += 1
        self.giveScore(whome,what)
        
    def getScore(self,career1,career2):
        x = self.careers.index(career1)
        y = self.careers.index(career2)
        return self.scoreBoard[x][y]

    def giveScore(self,userEmail,votedCareer):
        for user in self.users:
            if user['email'] == userEmail:
                user['score'] += self.getScore(user['career'],votedCareer)
            
    def getTopUser(self, n):
        results = []
        for i in range(n):
            maxScore = 0
            topUser = {}
            for user in self.users:
                if user['score'] >= maxScore and user not in results:
                    maxScore = user['score']
                    topUser = user
            results.append(topUser)
        return results
    
    def getRandomUsers(self, n):
        if len(self.users) >= n:
            result = []
            for i in range(n):
                user = random.choice(self.users)
                if user not in result:
                    result.append(user)
            return result
        return random.choices(self.users, k = n)