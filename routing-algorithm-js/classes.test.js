import { Skill, Request, Agent } from "./classes";

describe("Test Skill class", () => {
  test("create empty skill", () => {
    let skill = Object.create(Skill);
    expect(skill).toBeInstanceOf(Object);
  });
  test("create skill 1", () => {
    let skill = Object.create(Skill, {
      skillId: { value: 0 },
      name: { value: "skill1" }
    });
    expect(skill).toBeInstanceOf(Object);
  });
});

describe("Test Request class", () => {
  test("create empty request", () => {
    let request1 = Object.create(Request);
    expect(request1).toBeInstanceOf(Object);
  });
  test("create request with 2 skills", () => {
    let skill1 = Object.create(Skill, {
      skillId: { value: 1 },
      name: { value: "skill1" }
    });
    let skill2 = Object.create(Skill, {
      skillId: { value: 2 },
      name: { value: "skill2" }
    });
    let request1 = Object.create(Request, {
      requestId: { value: 0 },
      skill: { value: [skill1, skill2] }
    });
    expect(request1).toBeInstanceOf(Object);
  });
});

describe("Test Agent class", () => {
  test("create empty agent", () => {
    let agent1 = Object.create(Agent);
    expect(agent1).toBeInstanceOf(Object);
  });
  test("create agent with 2 skills", () => {
    let skill1 = Object.create(Skill, {
      skillId: { value: 1 },
      name: { value: "skill1" }
    });
    let skill2 = Object.create(Skill, {
      skillId: { value: 2 },
      name: { value: "skill2" }
    });
    let agent1 = Object.create(Agent, {
      agentId: { value: 0 },
      name: { value: "Adam" },
      availability: { value: true, writable: true },
      skill: { value: [skill1, skill2] }
    });
    expect(agent1).toBeInstanceOf(Object);
  });
  test("agent change availability", () => {
    let skill1 = Object.create(Skill, {
      skillId: { value: 1 },
      name: { value: "skill1" }
    });
    let skill2 = Object.create(Skill, {
      skillId: { value: 2 },
      name: { value: "skill2" }
    });
    let agent1 = Object.create(Agent, {
      agentId: { value: 0 },
      name: { value: "Adam" },
      availability: { value: true },
      skill: { value: [skill1, skill2] }
    });
    agent1.availability = false;
    expect(agent1).toBeInstanceOf(Object);
  });
});
