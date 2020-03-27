import { Skill, Request, Agent } from "./classes";
import { get_available_agents, calculate_suitability, route } from "./routing";

describe("Test get_available_agents function", () => {
  let skill1 = new Skill(1, "skill1");
  let skill2 = new Skill(2, "skill2");
  let skill3 = new Skill(3, "skill3");
  let agent1 = new Agent(1, "Adam", true, [skill1, skill2]);
  let agent2 = new Agent(2, "Bob", true, [skill2, skill3]);
  let agent3 = new Agent(3, "Charles", true, [skill2, skill3]);
  let agent4 = new Agent(4, "Dom", false, [skill2, skill3]);
  test("filtel 1 available agent", () => {
    expect(get_available_agents([agent1])).toEqual([agent1]);
  });
  test("filtel 1 unavailable agent", () => {
    expect(get_available_agents([agent4])).toEqual([]);
  });
  test("filtel 2 agent", () => {
    expect(get_available_agents([agent1, agent2])).toEqual([agent1, agent2]);
  });
  test("filtel 3 agent", () => {
    expect(get_available_agents([agent1, agent2, agent3])).toEqual([
      agent1,
      agent2,
      agent3
    ]);
  });
  test("filtel 4 agent", () => {
    expect(get_available_agents([agent1, agent2, agent3, agent4])).toEqual([
      agent1,
      agent2,
      agent3
    ]);
  });
});

describe("Test calculate_suitability", () => {
  let skill1 = new Skill(1, "skill1");
  let skill2 = new Skill(2, "skill2");
  let skill3 = new Skill(3, "skill3");
  let request1 = new Request(1, [skill1, skill2]);
  let request2 = new Request(2, [skill1, skill3]);
  let agent1 = new Agent(1, "Adam", true, [skill1, skill2]);
  let agent2 = new Agent(2, "Bob", true, [skill2, skill3]);
  let agent3 = new Agent(3, "Charles", true, [skill1, skill3]);
  test("calculate suitability 1", () => {
    expect(calculate_suitability(agent1, request1)).toEqual(1.0);
  });
  test("calculate suitability 2", () => {
    expect(calculate_suitability(agent1, request2)).toEqual(0.5);
  });
  test("calculate suitability 3", () => {
    expect(calculate_suitability(agent2, request1)).toEqual(0.5);
  });
  test("calculate suitability 4", () => {
    expect(calculate_suitability(agent2, request2)).toEqual(0.5);
  });
  test("calculate suitability 5", () => {
    expect(calculate_suitability(agent3, request1)).toEqual(0.5);
  });
  test("calculate suitability 6", () => {
    expect(calculate_suitability(agent3, request2)).toEqual(1.0);
  });
});

describe("Test route", () => {
  let skill1 = new Skill(1, "skill1");
  let skill2 = new Skill(2, "skill2");
  let skill3 = new Skill(3, "skill3");
  let request1 = new Request(1, [skill1, skill2]);
  let request2 = new Request(2, [skill1, skill3]);
  let agent1 = new Agent(1, "Adam", true, [skill1, skill2]);
  let agent2 = new Agent(2, "Bob", true, [skill2, skill3]);
  let agent3 = new Agent(3, "Charles", true, [skill1, skill3]);
  let agent4 = new Agent(4, "Dom", false, [skill2, skill3]);
  let agent5 = new Agent(5, "Eric", true, [skill2]);

  test("route 0", () => {
    let request_queue = [request1, request2];
    let agent_list = [agent4];

    let result = route(request_queue, agent_list);

    expect(result == []).toBeTruthy;
  });
  test("route 1", () => {
    let request_queue = [request1, request2];
    let agent_list = [agent1, agent2, agent3];

    let result = route(request_queue, agent_list);

    expect(result[0][0].agentId === 1 && result[0][1].requestId == 1)
      .toBeTruthy;
    expect(result[1][0].agentId == 2 && result[1][1].requestId == 2).toBeTruthy;
  });
  test("route 2", () => {
    let request_queue = [request2];
    let agent_list = [agent5];

    let result = route(request_queue, agent_list);

    expect(result == []).toBeTruthy;
  });
});
