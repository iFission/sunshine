import pytest
import classes


class TestSkill:
    def test_create_empty_skill(self):
        with pytest.raises(TypeError):
            self.skill = classes.Skill()

    def test_create_default_skill(self):
        self.skill = classes.Skill(1, 'skill1')
        assert isinstance(self.skill, classes.Skill)


class TestAgent:
    def test_create_empty_agent(self):
        with pytest.raises(TypeError):
            self.agent = classes.Agent()

    def test_create_default_agent(self):
        self.agent = classes.Agent(1, '', False, [classes.Skill(1, 'skill1')])

        assert isinstance(self.agent, classes.Agent)

    def test_create_agent_adam(self):
        self.agent = classes.Agent(1, 'Adam', False,
                                   [classes.Skill(1, 'skill1')])
        assert self.agent.agentId == 1
        assert self.agent.name == 'Adam'
        assert self.agent.availability == False
        assert self.agent.skill[0].skillId == classes.Skill(1,
                                                            'skill1').skillId
        assert self.agent.skill[0].name == classes.Skill(1, 'skill1').name
        assert len(self.agent.skill) == 1


class TestRequest:
    def test_create_empty_request(self):
        with pytest.raises(TypeError):
            self.request = classes.Request()

    def test_create_default_request(self):
        self.request = classes.Request(0, [classes.Skill(1, 'skill1')])
        assert isinstance(self.request, classes.Request)

    def test_create_request_1(self):
        self.request = classes.Request(1, [classes.Skill(1, 'skill1')])
        assert self.request.requestId == 1
        assert self.request.skill[0].skillId == classes.Skill(1,
                                                              'skill1').skillId
        assert self.request.skill[0].name == classes.Skill(1, 'skill1').name
        assert len(self.request.skill) == 1
