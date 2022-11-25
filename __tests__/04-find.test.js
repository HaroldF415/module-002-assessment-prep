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

describe("findTheLongestDinosaur()\n", () => {

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

    test("BONUS ROUND #1: should include using the `Math.max()`", () => {
        const hasMathMax = !!findTheLongestDinosaur.toString().match(/\Math.max(\s*\(|\()/g);
        expect(hasMathMax).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.reduce()`\n", () => {
        const hasReduce = !!findTheLongestDinosaur.toString().match(/\.reduce(\s*\(|\()/g);
        expect(hasReduce).toBeTruthy();   
    });

});

describe("findTheShortestDinosaur()\n", () => {

    test("should use the `.find()` method", () => {
        const hasFind = !!findTheShortestDinosaur.toString().match(/\.find(\s*\(|\()/g);
        expect(hasFind).toBeTruthy();
    });

    test("should return an object where the key is the tallest dinosaur name and the value is the length in feet", () => {
        
        const actual = findTheShortestDinosaur(dinosaurs);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Compsognathus");
        expect(actual[name]).toBeCloseTo(2.135, 1);

    });

    test("should return the first dinosaur if there are multiples with the same length", () => {

        const input = [
            ...dinosaurs,
            {
            dinosaurId: "7ZJlPQZRL",
            name: "Impasaurus",
            pronunciation: "IMP-AHH-SORE-us",
            meaningOfName: "Very short dinosaur",
            diet: "carnivore",
            lengthInMeters: 0.65,
            period: "Early Age",
            mya: [120, 110],
            info: "Not much is known about this dinosaur but it might have lived in Westeros/Kings Landing.",
            },
        ];
        
        const actual = findTheShortestDinosaur(input);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Compsognathus");
        expect(actual[name]).toBeCloseTo(2.135, 1);

    });

    test("should return an empty object if there are no dinosaurs\n", () => {

        const actual = findTheShortestDinosaur([]);
        const expected = {};
    
        expect(actual).toEqual(expected);

    });

    test("BONUS ROUND #1: should include using the `Math.min()` to findTheShortestDinosaur()", () => {
        const hasMathMin = !!findTheShortestDinosaur.toString().match(/\Math.min(\s*\(|\()/g);
        expect(hasMathMin).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.reduce()` to findTheShortestDinosaur()\n", () => {
        const hasReduce = !!findTheShortestDinosaur.toString().match(/\.reduce(\s*\(|\()/g);
        expect(hasReduce).toBeTruthy();   
    });

});

describe("findDinosaurByName()\n", () => {

    test("should use the `.find()` method", () => {
        const hasFind = !!findDinosaurByName.toString().match(/\.find(\s*\(|\()/g);
        expect(hasFind).toBeTruthy();
    });

    test("should return an empty object if there are no dinosaurs", () => {
        const actual = findDinosaurByName([], "Galapasaurus");
        const expected = {};

        expect(actual).toEqual(expected);
    });

    test("should return an empty object if the name of the dinosaur does not match any of the dinosaurs provided", () => {
        const actual = findDinosaurByName(dinosaurs, "Galapasaurus");
        const expected = {};

        expect(actual).toEqual(expected);
    });

    test("should return the first dinosaur that matches the name provided", () => {
        let dinoName = "Giraffatitan";
        const actual = findDinosaurByName(dinosaurs, dinoName);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Giraffatitan");
        expect(actual[name]).toEqual("Giraffe Titan!");

    });

    test("should make use of the '.toUpperCase()' method\n", () => {
        const hastoUpperCase = !!findDinosaurByName.toString().match(/\.toUpperCase(\s*\(|\()/g);
        expect(hastoUpperCase).toBeTruthy()
    });

    test("BONUS ROUND #1: should make use the `.toUpperCase()` method", () => {
        const hasToUpperCase = !!findDinosaurByName.toString().match(/\.toUpperCase(\s*\(|\()/g);
        expect(hasToUpperCase).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.map()` method", () => {
        const hasMap = !!findDinosaurByName.toString().match(/\.map(\s*\(|\()/g);
        expect(hasMap).toBeTruthy();   
    });

    test("BONUS ROUND #2: should include using the `.split()` method", () => {
        const hasSplit = !!findDinosaurByName.toString().match(/\.split(\s*\(|\()/g);
        expect(hasSplit).toBeTruthy();   
    });

});

describe("findThePokemonWithTheHighestAttackScore()\n", () => {

    test("should use the `.find()` method", () => {
        const hasFind = !!findThePokemonWithTheHighestAttackScore.toString().match(/\.find(\s*\(|\()/g);
        expect(hasFind).toBeTruthy();
    });

    test("should return an object where the key is the Pokemon's name and the value is the AttackScore", () => {
        
        const actual = findThePokemonWithTheHighestAttackScore(pokemon);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Dragonite");
        expect(actual[name]).toBeCloseTo(134, 1);

    });

    test("should return the first Pokemon if there are multiples with the same AttackScore", () => {

        const input = [
            ...pokemon,
            {
                national_number: '666',
                evolution: 'Metal Greymon',
                name: 'Greymon',
                type: ['Dinosaur', 'Fire'],
                stats: [
                    { category: 'total', value: 300 },
                    { category: 'hp', value: 22 },
                    { category: 'attack', value: 134 },
                    { category: 'defense', value: 100 },
                    { category: 'special attack', value: 30 },
                    { category: 'special defense', value: 30 },
                    { category: 'speed', value: 20 }
                ]
            },
        ];
        
        const actual = findThePokemonWithTheHighestAttackScore(input);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Dragonite");
        expect(actual[name]).toBeCloseTo(134, 1);

    });

    test("should return an empty object if there are no pokemon\n", () => {

        const actual = findThePokemonWithTheHighestAttackScore([]);
        const expected = {};
    
        expect(actual).toEqual(expected);

    });

    test("BONUS ROUND #1: should include using the `Math.max()` method", () => {
        const hasMathMax = !!findThePokemonWithTheHighestAttackScore.toString().match(/\Math.max(\s*\(|\()/g);
        expect(hasMathMax).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.reduce()` method", () => {
        const hasReduce = !!findThePokemonWithTheHighestAttackScore.toString().match(/\.reduce(\s*\(|\()/g);
        expect(hasReduce).toBeTruthy();   
    });

});

describe.only("findThePokemonWithTheLowestAttackScore()", () => {

    test("should use the `.find()` method", () => {
        const hasFind = !!findThePokemonWithTheLowestAttackScore.toString().match(/\.find(\s*\(|\()/g);
        expect(hasFind).toBeTruthy();
    });

    test("should return an object where the key is the Pokemon's name and the value is the AttackScore", () => {
        
        const actual = findThePokemonWithTheLowestAttackScore(pokemon);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Dragonite");
        expect(actual[name]).toBeCloseTo(134, 1);

    });

    test("should return the first Pokemon if there are multiples with the same AttackScore", () => {

        const input = [
            ...pokemon,
            {
                national_number: '666',
                evolution: 'Metal Greymon',
                name: 'Greymon',
                type: ['Dinosaur', 'Fire'],
                stats: [
                    { category: 'total', value: 300 },
                    { category: 'hp', value: 22 },
                    { category: 'attack', value: 134 },
                    { category: 'defense', value: 100 },
                    { category: 'special attack', value: 30 },
                    { category: 'special defense', value: 30 },
                    { category: 'speed', value: 20 }
                ]
            },
        ];
        
        const actual = findThePokemonWithTheLowestAttackScore(input);

        const keys = Object.keys(actual);
        expect(keys.length).toEqual(1);

        const name = keys[0];
        expect(name).toEqual("Dragonite");
        expect(actual[name]).toBeCloseTo(134, 1);

    });

    test("should return an empty object if there are no pokemon\n", () => {

        const actual = findThePokemonWithTheLowestAttackScore([]);
        const expected = {};
    
        expect(actual).toEqual(expected);

    });

    test("BONUS ROUND #1: should include using the `Math.min()` method", () => {
        const hasMathMax = !!findThePokemonWithTheLowestAttackScore.toString().match(/\Math.max(\s*\(|\()/g);
        expect(hasMathMax).toBeTruthy();
    });

    test("BONUS ROUND #2: should include using the `.reduce()` method", () => {
        const hasReduce = !!findThePokemonWithTheLowestAttackScore.toString().match(/\.reduce(\s*\(|\()/g);
        expect(hasReduce).toBeTruthy();   
    });    
});

describe("findfindPokemonByNationalNumber()", () => {});

describe("findPokemonByName()", () => {});

describe("findPokemonByEvolution()", () => {});