// Write your tests here!
let { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  it("all characters should be unique", () => {
    const actual = substitution("think", "dkaljk");
    expect(actual).to.be.false;
  });
  it("should be able to take special characters", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  });
  it("should maintain spacing", () => {
    const actual = substitution("mes sage", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&i i$r&";
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const actual = substitution("MES sage", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&i i$r&";
    expect(actual).to.eql(expected);
  });
});