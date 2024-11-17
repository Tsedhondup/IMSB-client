export const filterGenre = (data) => {
  const nestedGenres = data.map((element) => {
    return element.split(/\s+/);
  });
  // FLATTEN GENRES ARRAY
  const flattenArray = nestedGenres
    .flat() // Flatten the array
    .map((str) => str.split(/\s+/)) // Split strings into individual words
    .flat(); // Flatten the resulting nested arrays

  // REMOVE DUPLICATE ITEM FROM FLATTENED ARRAY
  const uniqueGenres = [...new Set(flattenArray)];
  const finalGenres = uniqueGenres.map((element) => {
    // CREATE LETTER ONLY ARRAY
    const elArray = element.split("");
    // REMOVED ","
    const textOnlyArray = elArray.filter((element) => {
      return element !== ",";
    });
    // JOIN LETTER ONLY ARRAY INTO A SIGLE WORD
    const finalArray = textOnlyArray.join("");
    // RETURN SINGLE WORD
    return finalArray;
  });
  return finalGenres;
};
