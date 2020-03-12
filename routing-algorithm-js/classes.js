//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export { Skill, Request, Agent };
class Skill {
  constructor(skillId, name) {
    this.skillId = skillId;
    this.name = name;
  }
}

class Request {
  constructor(requestId, skill) {
    this.requestId = requestId;
    this.skill = skill;
  }
}

class Agent {
  constructor(agentId, name, availability, skill) {
    this.agentId = agentId;
    this.name = name;
    this.availability = availability;
    this.skill = skill;
  }
}
