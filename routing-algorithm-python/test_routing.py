import pytest
import routing
import classes


def test_get_available_agents_empty():
    with pytest.raises(TypeError):
        routing.get_available_agents()


def test_get_available_agent_1():
    agent1 = classes.Agent(
        1, "adam", True,
        [classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    assert routing.get_available_agents([agent1])[0].agentId == agent1.agentId


def test_get_available_agent_2():
    agent1 = classes.Agent(
        1, "adam", True,
        [1, classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    agent2 = classes.Agent(
        2, "bob", True,
        [2, classes.Skill(2, 'skill2'),
         classes.Skill(3, 'skill3')])

    agent_list = [agent1, agent2]
    assert len(routing.get_available_agents(agent_list)) == 2


def test_get_available_agent_3():
    agent1 = classes.Agent(
        1, "adam", True,
        [1, classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    agent2 = classes.Agent(
        2, "bob", True,
        [2, classes.Skill(2, 'skill2'),
         classes.Skill(3, 'skill3')])
    agent3 = classes.Agent(
        3, "charles", True,
        [classes.Skill(1, 'skill1'),
         classes.Skill(3, 'skill3')])
    agent_list = [agent1, agent2, agent3]
    assert len(routing.get_available_agents(agent_list)) == 3


def test_get_available_agent_2_unavailable():
    agent1 = classes.Agent(
        1, "adam", False,
        [1, classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    agent2 = classes.Agent(
        2, "bob", False,
        [2, classes.Skill(2, 'skill2'),
         classes.Skill(3, 'skill3')])
    agent3 = classes.Agent(
        3, "charles", True,
        [classes.Skill(1, 'skill1'),
         classes.Skill(3, 'skill3')])
    agent_list = [agent1, agent2, agent3]
    assert len(routing.get_available_agents(agent_list)) == 1


def test_calculate_suitability_empty():
    with pytest.raises(TypeError):
        routing.calculate_suitability()


def test_calculate_suitability_1():
    request1 = classes.Request(
        1, [classes.Skill(1, "skill1"),
            classes.Skill(2, "skill2")])
    request2 = classes.Request(
        2, [classes.Skill(1, "skill1"),
            classes.Skill(3, "skill3")])
    agent1 = classes.Agent(
        1, "adam", True,
        [classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    agent2 = classes.Agent(
        2, "bob", True,
        [classes.Skill(2, 'skill2'),
         classes.Skill(3, 'skill3')])
    agent3 = classes.Agent(
        3, "charles", False,
        [classes.Skill(1, 'skill1'),
         classes.Skill(3, 'skill3')])
    assert routing.calculate_suitability(agent1, request1) == 1.0
    assert routing.calculate_suitability(agent1, request2) == .5
    assert routing.calculate_suitability(agent2, request1) == .5
    assert routing.calculate_suitability(agent2, request2) == .5
    assert routing.calculate_suitability(agent3, request1) == .5
    assert routing.calculate_suitability(agent3, request2) == 1.0


def test_route():
    request1 = classes.Request(
        1, [classes.Skill(1, "skill1"),
            classes.Skill(2, "skill2")])
    request2 = classes.Request(
        2, [classes.Skill(1, "skill1"),
            classes.Skill(3, "skill3")])
    agent1 = classes.Agent(
        1, "adam", True,
        [classes.Skill(1, 'skill1'),
         classes.Skill(2, 'skill2')])
    agent2 = classes.Agent(
        2, "bob", True,
        [classes.Skill(2, 'skill2'),
         classes.Skill(3, 'skill3')])
    agent3 = classes.Agent(
        3, "charles", False,
        [classes.Skill(1, 'skill1'),
         classes.Skill(3, 'skill3')])

    request_queue = [request1, request2]
    agent_list = [agent1, agent2, agent3]
    result = routing.route(request_queue, agent_list)

    assert result[0][0].agentId == 1 and result[0][1].requestId == 1
    assert result[1][0].agentId == 2 and result[1][1].requestId == 2