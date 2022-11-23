const {
    filterSongsBySaib,
    filterSongsOverThreeMinutes,
    filterTitleTracks,
    filterByGenre,
    filterAllMoviesReleasedAtOrBeforeYear,
} = require("../src/02-filter");

const { nums, words } = require("../data/data.js");
const pokemon = require("../data/poke");
const shuffledPokemon = require("../data/poke_remix");


console.log(`
.--.
|__| .-------------------.
|=.| |.------------------.|
|--| || Let's .filter()! ||
|  | |'------------------'|
|__|~')__________________('
`)

describe("filterSongsBySaib()", () => {

    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
      console.log = jest.fn();
    });
  
    test("should use the `.filter()` method", () => {
      const hasFilter = !!filterSongsBySaib.toString().match(/\.filter(\s*\(|\()/g);
      expect(hasFilter).toBeTruthy();
    });
  
    test("should return all songs by the artist Saib", () => {
      const actual = filterSongsBySaib(songs);
      const expected = [
        {
          title: "Pineapple Jam",
          album: "Bluewerks Vol. 1: Up Down Left Right",
          artist: "Saib",
          runtimeInSeconds: 186,
        },
        {
          title: "Samui Sunrise",
          album: "Samui Sunrise",
          artist: "Saib",
          runtimeInSeconds: 204,
        },
      ];
      expect(actual).toEqual(expected);
    });

});

describe("filterSongsOverThreeMinutes()", () => {

    let songs;
    beforeEach(() => {
      jest.resetModules();
      songs = require("../data/songs");
    });
  
    test("should use the `.filter()` method", () => {
      const hasFilter = !!filterSongsOverThreeMinutes
        .toString()
        .match(/\.filter(\s*\(|\()/g);
      expect(hasFilter).toBeTruthy();
    });
  
    test("should return all songs over three minutes (180 seconds)", () => {
      const actual = filterSongsOverThreeMinutes(songs);
      const expected = [
        {
          title: "Berlin Tsukin",
          album: "Bi-To Te-Pu",
          artist: "Taiyo Ky",
          runtimeInSeconds: 193,
        },
        {
          title: "Pineapple Jam",
          album: "Bluewerks Vol. 1: Up Down Left Right",
          artist: "Saib",
          runtimeInSeconds: 186,
        },
        {
          title: "Samui Sunrise",
          album: "Samui Sunrise",
          artist: "Saib",
          runtimeInSeconds: 204,
        },
        {
          title: "Regular Guy",
          album: "Regular Guy",
          artist: "Peanut",
          runtimeInSeconds: 215,
        },
        {
          title: "Kyona",
          album: "Kyona",
          artist: "Two Sleepy",
          runtimeInSeconds: 188,
        },
      ];
      expect(actual).toEqual(expected);
    });

  });