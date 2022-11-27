/**
 * DON'T TOUCH THE LINES BELOW!!!
 */
const song = require("../data/songs"); 
const { nums, words } = require("../data/data");
const pokemon = require("../data/poke");

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 *
 * MUST USE '.map()'
 */
const mapSongTitles = (songs) => {
  const titles = songs.map((song) => {
    return song.title;
  });
  return titles;
};

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
const mapSongDetails = (songs) => {
  const theDeets = songs.map((song) => {
    return `${song.title} by ${song.artist}`;
  });
  return theDeets;
};

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
const mapTitleAndArtist = (songs) => {
  const hiKey = songs.map((song) => {
    //referenceing the value of the tile property and assigning it to be the key -- same for artist we are getting the value and we are setting it to be the value of the property we are creating because we are taking it from the object using the map() method.
    return { [song.title]: song.artist };
  });
  return hiKey;
};

/**
 * Returns an array of numbers, where each object is squared and then multiplied by their index.
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} An array of numbers.
 *
 * MUST USE '.map()'
 * Remember that the parameters for '.map()' include '.map( (element, index, array) {/__/});'
 *
 */
const mapArrayValuesSquaredTimesIndex = (nums) => {
  //so we must return an array of newly mapped elements that have been mulitplied by there "square" and then by the index of the array.
  const mapped = nums.map((el, index) => {
    // callback function ^^^^^^^^^^^^^^
    //we are inside our codeblock for the arow function that will invoke our arguments of 'element' and 'the index' ---> below we are going t return the element times its self or square times its index.
    return el * el * index;
  });
  return mapped;
};

/**
 * Returns an array of strings, where each string is uppercased.
 * @param {string[]} words - An array of strings.
 * @returns {string} An array of strings.
 */
const mapArrayWordsUpperCased = (words) => {
  return words.map((word) => word.toUpperCase());
};

/**
 * countByType()
 * -----------------------------
 * Returns an object where the keys are Pokemon types and the values are the number of Pokemon in the array with that type. If the inputted `pokemon` array is empty, return `{}`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {Object} An object where keys are Pokemon types (e.g. "Water") and the values are how many Pokemon in the array have that type (e.g. 22).
 *
 * EXAMPLE:
 *  countByType(pokemon);
 *  //> {
        Grass: 11,
        Poison: 14,
        Fire: 8,
        Flying: 12,
        Water: 22,
        Bug: 8,
        Normal: 14,
        Electric: 5,
        Ground: 10,
        Steel: 3,
        Fairy: 5,
        Fighting: 5,
        Psychic: 13,
        Rock: 4,
        Ice: 4,
        Ghost: 2,
        Dragon: 3
    };
 */
const mapCountByType = (pokemon) => {
  const pokeBall = {};
  //init a new object to return the details of the types
  const pocketMonster = pokemon
  //init new variable for your higher order function
    .map(poke => poke.type)
    //use map method to single out the types of pokemon
    .flat(1)
      //! using the flat method to expunge data out of an array
    .forEach(type => {
    //   if ( !pokeBall [type]){
    //       pokeBall[type] = 1
    //   }else{
    //       pokeBall[type] ++
    //   }
      pokeBall[type] = (pokeBall[type] || 0) + 1;
    });
    //console.log(pokeBall)
    return pokeBall
};

/**
 * getAverageTotalStatScore()
 * -----------------------------
 * Averages all of the `total` stat scores from all Pokemon and returns it, as a number.
 * If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The average `total` stat across all Pokemon.
 *
 * EXAMPLE:
 *  getAverageTotalStatScore(pokemon);
 *  //> 407.22
 */
const mapAverageTotalStatScore = (pokemon) => {
    
    //const totalStats = pokemon.map ((poke => poke.stats[0].value))
    // reduce takes in two parameters 1. the accumulator 2. the current element 
    //const sumTotal = totalStats.reduce((accumulator, current) =>{
        //return accumulator + current
    //}) //! end of callback function and takes in an intitial value of Zero--> with no intial value the reduce method will assign the accumulator as the initial value.
    //return Number((sumTotal/pokemon.length).toFixed(2))
    //ternary conditional guard clause if the condition equals to true give it the value you want to evaluate to true

    return !pokemon.length ? 0 :    Number(
        (
        (
        (pokemon.map( poke => poke.stats[0].value ) )
        //whatever value is going to be a number and must be divided by the pokemon.length
        .reduce( (acc, current ) => acc + current )
        )
        / pokemon.length
        ).toFixed(2)
    )
};

/**
 * getHighestAttackStatScore()
 * -----------------------------
 * Returns the highest `attack` stat score among all Pokemon. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The highest `attack` stat of all Pokemon.
 *
 * EXAMPLE:
 *  getHighestAttackStatScore(pokemon);
 *  //> 134
 */
const mapHighestAttackScore = (pokemon) => {
    //const hiAttack = pokemon.map((poke => poke.stats[2].value))
    // think of accumulator as a bucket that will only give you the values that pass your logic
    //acc and curr will have same value the first time we enter array -- if second time arround the accumulator is less it should retrun the current value if it is bigger and it will go through each iteration until it finds the LARGEST value.
  
return !pokemon.length ? 0:  pokemon.map((poke => poke.stats[2].value)).reduce((acc, curr) => {
    //this logic will send back the largest number -- 
        // if( acc < curr){
        //     return curr
        // } else {
        //     return acc
        // }
    //!will always return the largest number in math.max in one line!
        return Math.max(acc, curr)
    })
    //return (highestAttack)
    //! must have less commments to pass the 140 extra bonus round!
};

module.exports = {
  mapSongTitles,
  mapSongDetails,
  mapTitleAndArtist,
  mapArrayValuesSquaredTimesIndex,
  mapArrayWordsUpperCased,
  mapCountByType,
  mapAverageTotalStatScore,
  mapHighestAttackScore,
};
