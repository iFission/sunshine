import classes

request1 = classes.Request(
    1, [classes.Skill(1, "skill1"),
        classes.Skill(2, "skill2")])
request2 = classes.Request(
    2, [classes.Skill(1, "skill1"),
        classes.Skill(3, "skill3")])
print(request1)
print(request2)

agent1 = classes.Agent(
    "adam", True, [classes.Skill(1, 'skill1'),
                   classes.Skill(2, 'skill2')])
agent2 = classes.Agent(
    "bob", True, [classes.Skill(2, 'skill2'),
                  classes.Skill(3, 'skill3')])
agent3 = classes.Agent(
    "charles", False, [classes.Skill(1, 'skill1'),
                       classes.Skill(3, 'skill3')])

request_queue = [request1, request2]
agent_list = [agent1, agent2, agent3]


def get_available_agents():
    return [agent for agent in agent_list if agent.availability]


def calculate_suitability(agent, request):
    agent_skills = [skill.skillId for skill in agent.skill]
    request_skills = [skill.skillId for skill in request.skill]
    return len(
        set(agent_skills).intersection(request_skills)) / len(request_skills)


print(get_available_agents())
print(request_queue)

print(calculate_suitability(agent1, request1))

while (request_queue):
    available_agents = get_available_agents()
    if available_agents:
        for request in request_queue:
            suitability_ls = []
            for agent in available_agents:
                suitability_ls.append(calculate_suitability(agent, request))
            best_suitability = max(suitability_ls)
            if best_suitability >= .5:
                agent_assigned = available_agents[suitability_ls.index(
                    best_suitability)]
                print(
                    f"best suitability for request {request.caseId} is {agent_assigned.name}"
                )
                request_queue.remove(request)
                agent_assigned.availability = False
                break
