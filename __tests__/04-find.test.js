const {
    findTheLongestDinosaur,
    findTheShortestDinosaur,
    findDinosaurByName,
    findThePokemonWithTheHighestAttackScore,
    findThePokemonWithTheLowestAttackScore,
    findPokemonByNationalNumber,
    findPokemonByName,
    findPokemonByEvolution,
 } = require("../src/04-find");

const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");
const dinosaurs = require("../data/dinosaurs");

console.log(`
.--.
|__| .-----------------.
|=.| |.----------------.|
|--| || Let's .find()! ||
|  | |'----------------'|
|__|~')________________('
`)

describe.only("findTheLongestDinosaur()\n", () => {

    test("should use the `.find()` method", () => {
        const hasFind = !!findTheLongestDinosaur.toString().match(/\.find(\s*\(|\()/g);
        expect(hasFind).toBeTruthy();
    });

    test("should return an object where the key is the tallest dinosaur name and the value is the length in feet", () => {
        
        const actual = findTheLongestDinosaur(dinosaurs);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Brachiosaurus");
        expect(actual[name]).toBeCloseTo(98.42, 1);

    });

    test("should return the first dinosaur if there are multiples with the same length", () => {

        const input = [
            ...dinosaurs,
            {
            dinosaurId: "7ZJlPQZRL",
            name: "Tallosaurus",
            pronunciation: "TALL-o-SORE-us",
            meaningOfName: "Very tall dinosaur",
            diet: "herbivorous",
            lengthInMeters: 30,
            period: "Early Cretaceous",
            mya: [120, 110],
            info: "Not much is known about this dinosaur because it didn't exist.",
            },
        ];
        
        const actual = findTheLongestDinosaur(input);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Brachiosaurus");
        expect(actual[name]).toBeCloseTo(98.42, 1);

    });

    test("should return an empty object if there are no dinosaurs\n", () => {

        const actual = findTheLongestDinosaur([]);
        const expected = {};
    
        expect(actual).toEqual(expected);

    });

    test("BONUS ROUND #1: should include using the `Math.max()` to findTheLongestDinosaur()", () => {
        const hasMathMax = !!findTheLongestDinosaur.toString().match(/\Math.max(\s*\(|\()/g);
        expect(hasMathMax).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.reduce()` to findTheLongestDinosaur()", () => {
        const hasReduce = !!findTheLongestDinosaur.toString().match(/\.reduce(\s*\(|\()/g);
        expect(hasReduce).toBeTruthy();   
    });

});

describe("findTheShortestDinosaur()\n", () => {});

describe("findDinosaurByName()", () => {});

describe("findThePokemonWithTheHighestAttackScore()", () => {});

describe("findThePokemonWithTheLowestAttackScore()", () => {});

describe("findfindPokemonByNationalNumber()", () => {});

describe("findPokemonByName()", () => {});

describe("findPokemonByEvolution()", () => {});