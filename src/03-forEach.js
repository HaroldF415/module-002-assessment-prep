const forEachWordOver10Count = ( words ) => {
  
let count = 0;

words.forEach( word => word.length > 10 ? count++ : count + 0 );

return count;
  
}; 
  
  const logWordsWithExclamation = ( words ) => {
    
    return words.forEach( word => console.log( `${word}!` ) );
  
  }; // ends logWordsWithExclamation()