/**
 * DON'T TOUCH THE LINE BELOW!!!
 */
const songData = require("../data/song");
const { nums, words } = require("../data/data");

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 * 
 * MUST USE '.map()'
 */

const mapSongTitles = ( songs ) => {};

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  > [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 * 
 *  MUST USE '.map()'
 */

const mapSongDetails = (songs) => {};

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  > [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 * 
 * MUST USE '.map()'
 */

const mapTitleAndArtist = (songs) => {};

/**
 * Returns an array of numbers, where each object is squared and then multiplied by their index.
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} An array of numbers.
 * 
 * MUST USE '.map()'
 * Remember that the parameters for '.map()' include '.map( (element, index, array) {/__/});'
 * 
 */
const mapArrayValuesSquaredTimesIndex = (nums) => {};

/**
 * Returns an array of strings, where each string is uppercased.
 * @param {string[]} words - An array of strings.
 * @returns {string} An array of strings. 
 */
const mapArrayWordsUpperCased = (words) => {};

module.exports = {
    mapSongTitles,
    mapSongDetails,
    mapTitleAndArtist,
    mapArrayValuesSquaredTimesIndex,
    mapArrayWordsUpperCased,
};