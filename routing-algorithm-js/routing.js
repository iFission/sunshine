import { Skill, Request, Agent } from "./classes";
import { tsConstructSignatureDeclaration } from "@babel/types";

export { get_available_agents, calculate_suitability, route };

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

function route(request_queue, agent_list, threshold_suitability = 0.5) {
  let route_queue = [];
  while (request_queue.length > 0) {
    let available_agents = get_available_agents(agent_list);
    if (available_agents.length > 0) {
      for (let request of request_queue) {
        let suitability_ls = [];
        for (let agent of available_agents) {
          suitability_ls.push(calculate_suitability(agent, request));
        }
        let best_suitability = Math.max.apply(Math, suitability_ls);
        if (best_suitability >= threshold_suitability) {
          let agent_assigned =
            available_agents[suitability_ls.indexOf(best_suitability)];
          route_queue.push([agent_assigned, request]);
          request_queue.pop(request_queue.indexOf(request));
          agent_assigned.availability = false;
          break;
        } else {
          return route_queue;
        }
      }
    } else {
      return route_queue;
    }
  }
  return route_queue;
}
