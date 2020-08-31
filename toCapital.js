const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase()  +  word.slice(1)).join(" ");
}

const shortStr = "Hi there";
const longStr = "the quick brown fox jumped over the lazy dog";

toCapital(longStr); //? this should split out each word within an array

"word".slice(1)//? (//? console log functions tagged with this symbol)