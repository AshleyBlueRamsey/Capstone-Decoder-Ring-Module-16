// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    describe("polybius set to encode", () => {

        it("Should be read by comparing the first digit to the number on the top of the table and the second digit to that on the left", () => {
            const expected = "4432423352125413";
            const actual = polybiusModule.polybius("thinkful");
            expect(actual).to.equal(expected);
        });

        it("Should translate both 'i' and 'j' to 42", () => {
            const actualWithI = polybiusModule.polybius("thinkful");
            const actualWithJ = polybiusModule.polybius("thjnkful");
            expect(actualWithJ).to.equal(actualWithI);
        });

        it("Should ignore capital letters", () => {
            const expected = "4432423352125413";
            const actualWithCapitalLetter = polybiusModule.polybius("Thinkful");
            const actualWithoutCapitalLetter = polybiusModule.polybius("thinkful");
            expect(actualWithCapitalLetter).to.equal(expected);
            expect(actualWithoutCapitalLetter).to.equal(expected);
        });

        it("Should maintain spaces within the message", () => {
            const expected = "3251131343 2543241341";
            const actual = polybiusModule.polybius("Hello world");
            expect(actual).to.equal(expected);
        });
    });

    describe("polybius set to decode", () => {

        it("Should decode the message so that each pair of numbers is translated using the coordinates", () => {
            const expected = "hello world";
            const actual = polybiusModule.polybius("3251131343 2543241341", false);
            expect(actual).to.equal(expected);
        });

        it("Should decode 42 so that both letters 'i' and 'j' are shown", () => {
            const expected = "th(i/j)nkful";
            const actual = polybiusModule.polybius("4432423352125413", false);
            expect(actual).to.equal(expected);
        });

        it("Should maintain spaces throughout the message", () => {
            const expected = "hello world";
            const actual = polybiusModule.polybius("3251131343 2543241341", false);
            expect(actual).to.equal(expected);
        });
    });
});
