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
      songs = require("../data/songs");
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