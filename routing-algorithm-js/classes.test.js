import { Skill, Request, Agent } from "./classes";

describe("Test Skill class", () => {
  test("create empty skill", () => {
    let skill = new Skill(0, "");
    expect(skill).toBeInstanceOf(Object);
  });
  test("create skill 1", () => {
    let skill = new Skill(0, "skill1");
    expect(skill).toBeInstanceOf(Object);
  });
});

describe("Test Request class", () => {
  test("create empty request", () => {
    let request1 = new Request();
    expect(request1).toBeInstanceOf(Object);
  });
  test("create request with 2 skills", () => {
    let skill1 = new Skill(1, "skill1");
    let skill2 = new Skill(2, "skill2");
    let request1 = new Request(0, [skill1, skill2]);
    expect(request1).toBeInstanceOf(Object);
  });
});

describe("Test Agent class", () => {
  test("create empty agent", () => {
    let agent1 = new Agent();
    expect(agent1).toBeInstanceOf(Object);
  });
  test("create agent with 2 skills", () => {
    let skill1 = new Skill(1, "skill1");
    let skill2 = new Skill(2, "skill2");
    let agent1 = new Agent(0, "Adam", true, [skill1, skill2]);
    expect(agent1).toBeInstanceOf(Object);
  });
  test("agent change availability", () => {
    let skill1 = new Skill(1, "skill1");
    let skill2 = new Skill(2, "skill2");
    let agent1 = new Agent(0, "Adam", true, [skill1, skill2]);
    agent1.availability = false;
    expect(agent1.availability).toEqual(false);
  });
});
