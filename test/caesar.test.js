// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("Should return 'false' if the shift value equals zero", () => {
    const actual = caesar("input", 0, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return 'false' if the shift value is less than -25", () => {
    const actual = caesar("input", -25, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return 'false' if the shift value is more than 25", () => {
    const actual = caesar("input", 26, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return 'false' if the shift value is not present", () => {
    const actual = caesar("input", undefined, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters", () => {
    const actual = caesar("This is a secret message!", 8, true);
    const expected = "bpqa qa i amkzmb umaaiom!";

    expect(actual).to.equal(expected);
  });
});