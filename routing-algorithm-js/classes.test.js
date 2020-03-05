import { Skill } from "./classes";

describe("Hello World", () => {
  let skill = Object.create(Skill, {
    skillId: { value: 0 },
    name: { value: "skill1" }
  });
  test("create_empty_skill", () => {
    expect(skill).toBeInstanceOf(Object);
  });
});
