const {
    mapSongTitles,
    mapSongDetails,
    mapTitleAndArtist,
    mapArrayValuesSquaredTimesIndex,
    mapArrayWordsUpperCased, 
} = require("../src/01-map");

describe("mapSongTitles()", () => {
    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/testingData");
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
    songs = require("../data/testingData");
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
    songs = require("../data/testingData");
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