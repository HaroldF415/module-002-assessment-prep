const {
    mapSongTitles,
    mapSongDetails,
    mapTitleAndArtist,
    mapArrayValuesSquaredTimesIndex,
    mapArrayWordsUpperCased, 
} = require("../src/01-map");

const { nums, words } = require("../data/data.js");

describe("mapSongTitles()", () => {
    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/song");
    });
  
    test("should use the `.map()` method", () => {
      const hasMap = !!mapSongTitles.toString().match(/\.map(\s*\(|\()/g);
      expect(hasMap).toBeTruthy();
    });
  
    test("should return an array of all song titles", () => {
      const actual = mapSongTitles(songs);
      const expected = [
        "Berlin Tsukin",
        "Up",
        "Daylight",
        "Dormancy",
        "Pineapple Jam",
        "Samui Sunrise",
        "Regular Guy",
        "In the Middle of Nowhere",
        "Pink Elephants",
        "Kyona",
      ];
      expect(actual).toEqual(expected);
    });
});

describe("mapSongDetails()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/song");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!mapSongDetails.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array with the song title and artist", () => {
    const actual = mapSongDetails(songs);
    const expected = [
      "Berlin Tsukin by Taiyo Ky",
      "Up by Sebastian Kamae",
      "Daylight by hiyasu",
      "Dormancy by Arcade Portal",
      "Pineapple Jam by Saib",
      "Samui Sunrise by Saib",
      "Regular Guy by Peanut",
      "In the Middle of Nowhere by Soulaced",
      "Pink Elephants by Timestreet",
      "Kyona by Two Sleepy",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("mapTitleAndArtist()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/song");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!mapTitleAndArtist.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array of objects where the key is the song title and the value is the song artist", () => {
    const actual = mapTitleAndArtist(songs);
    const expected = [
      { "Berlin Tsukin": "Taiyo Ky" },
      { Up: "Sebastian Kamae" },
      { Daylight: "hiyasu" },
      { Dormancy: "Arcade Portal" },
      { "Pineapple Jam": "Saib" },
      { "Samui Sunrise": "Saib" },
      { "Regular Guy": "Peanut" },
      { "In the Middle of Nowhere": "Soulaced" },
      { "Pink Elephants": "Timestreet" },
      { Kyona: "Two Sleepy" },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("mapArrayValuesSquaredTimesIndex()",() => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapArrayValuesSquaredTimesIndex.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("A new array of values that are squared and then multiplied by their index number", () => {
    expect(/\.map/.test(mapArrayValuesSquaredTimesIndex.toString())).toBe(true);
    expect(mapArrayValuesSquaredTimesIndex(nums)).toStrictEqual([
      0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0,
    ]);
  });
});

describe("mapArrayWordsUpperCased()", () => {

  test("should use the `.map()` method", () => {
    const hasMap = !!mapArrayWordsUpperCased.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("A new array of words that are all uppercase", () => {
    expect(/\.map/.test(mapArrayWordsUpperCased.toString())).toBe(true);
    expect(mapArrayWordsUpperCased(words)).toStrictEqual([
      "THE",
      "QUICK",
      "BROWN",
      "FOX",
      "JUMPS",
      "OVER",
      "THE",
      "LAZY",
      "DOG",
    ]);
  });
});