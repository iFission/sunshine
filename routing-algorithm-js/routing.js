import { Skill, Request, Agent } from "./classes";

export { get_available_agents, calculate_suitability };

function get_available_agents(agent_list) {
  return agent_list.filter(agent => agent.availability);
}

function calculate_suitability(agent, request) {
  let agent_skills = agent.skill.filter(skill => skill.skillId);
  let request_skills = request.skill.filter(skill => skill.skillId);
  let intersection = request_skills.filter(skill =>
    agent_skills.includes(skill)
  );

  return intersection.length / request_skills.length;
}
