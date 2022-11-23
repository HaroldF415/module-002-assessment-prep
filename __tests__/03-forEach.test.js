const {
    forEachWordOver4Count,
    forEachWordWithExclamation,
    forEachSongPrintDetails,
} = require("../src/03-forEach");

const { nums, words } = require("../data/data.js");

console.log(`
.--.
|__| .--------------------.
|=.| |.-------------------.|
|--| || Let's .forEach()! ||
|  | |'-------------------'|
|__|~')___________________('
`)

describe.only("forEachWordOver4Count()", () =>{

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachWordOver4Count.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });

    test("should return a number that counts how many words are over 4 characters long", () => {
        const actual = forEachWordOver4Count(words);
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    test("BONUS ROUND: can you do it in less than 111 characters?", () => {
        const characterMatch = forEachWordOver4Count.toString().length;
        const expected = 109;
        expect(characterMatch).toBeCloseTo(expected, 110)
    });

});

describe("forEachWordWithExclamation()", () =>{

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachWordWithExclamation.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });

    //test("should ")
});

describe("forEachSongPrintDetails()", () =>{

    test("should use the `.forEach()` method", () => {
        const hasForEach = !!forEachSongPrintDetails.toString().match(/\.forEach(\s*\(|\()/g);
        expect(hasForEach).toBeTruthy();
    });
});


