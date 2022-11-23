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

describe.only("filterSongsBySaib()", () => {
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