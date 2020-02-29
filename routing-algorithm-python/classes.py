class Agent:
    name: ""
    availability = False
    skill = []

    def __init__(self, name, availability, skill):
        self.name = name
        self.availability = availability
        self.skill = skill

    def __repr__(self):
        return f'{self.name}, {self.availability}, {self.skill}'


class Request:
    caseId: 0
    skill = []

    def __init__(self, caseId, skill):
        self.caseId = caseId
        self.skill = skill

    def __repr__(self):
        return f'{self.caseId}, {self.skill}'


class Skill:
    skillId: 0
    name = ""

    def __init__(self, skillId, name):
        self.skillId = skillId
        self.name = name

    def __repr__(self):
        return f'{self.skillId}'