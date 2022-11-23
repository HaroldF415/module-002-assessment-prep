/**
 * DO NOT CHANGE THE LINE BELOW
 */

const { nums, words } = require("../data/data");

const forEachWordOver4Count = ( words ) => {}; 
  
const forEachWordWithExclamation = ( words ) => {
  
  return words.forEach( word => console.log( `${word}!` ) );

};

const forEachSongPrintDetails = ( songs ) => {

  // return songs.forEach( song => console.log( `${song.title} by ${song.artist}` ) );

};

module.exports = {

  forEachWordOver4Count,
  forEachWordWithExclamation,
  forEachSongPrintDetails,

};