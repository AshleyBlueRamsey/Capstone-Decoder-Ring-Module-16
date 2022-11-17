// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {

    it("Should include spaces and letters as well as special characters such as '#', '$', '*', etc.", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal("message");
    });

    it("Should maintain spaces throughout when decoding", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal("message");
    });

    it("Should maintain spaces throughout when encoding", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });

    it("Should ignore capital letters", () => {
        const actual = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });

    it("Should maintain that the alphabet parameter be a string of exactly 26 characters, which could include special characters such as '#', '$', '*', and the alphabet parameter must be unique", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal("y&ii$r&");
    });

    it("Should return 'false' if the alphabet is shorter or longer than 26 characters", () => {
        const shortActual = substitution("thinkful", "short");
        const longActual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(shortActual).to.be.false;
        expect(longActual).to.be.false;
    });

    it("Should return false if the alphabet is null", () => {
        let actual = substitution("thinkful", "");
        expect(actual).to.be.false;
    });
});