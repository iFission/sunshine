class Agent:
    agentId = 0
    name = ""
    availability = False
    skill = []

    def __init__(self, agentId, name, availability, skill):
        self.agentId = agentId
        self.name = name
        self.availability = availability
        self.skill = skill

    def __repr__(self):
        return f'{self.name}, {self.availability}, {self.skill}'


class Request:
    requestId = 0
    skill = []

    def __init__(self, requestId, skill):
        self.requestId = requestId
        self.skill = skill

    def __repr__(self):
        return f'{self.requestId}, {self.skill}'


class Skill:
    skillId = 0
    name = ""

    def __init__(self, skillId, name):
        self.skillId = skillId
        self.name = name

    def __repr__(self):
        return f'{self.skillId}'