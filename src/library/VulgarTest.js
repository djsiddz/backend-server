const fs = require("fs");
const path = require("path");

function GetVulgarWords()
{
    // Get the File Data
    var fileData = fs.readFileSync(path.join(__dirname, "./vulgar.txt"), "ascii");
    return fileData.split("\n");
}

function TokenizeString(input)
{
    // Make it Lowercase
    var lowercase = input.toLowerCase();

    // Switch Around Similar Looking Symbols
    var partsRemoved = lowercase;
    partsRemoved = partsRemoved.replace(/\$/g, "s");
    partsRemoved = partsRemoved.replace(/\@/g, "a");

    // Return the Final Result
    return partsRemoved;
}

function DetectVulgarWords(input)
{
    // Tokenize the Input String
    const tokenizedString = TokenizeString(input);
    const vulgarWords = GetVulgarWords();

    // Loop Through All the Words
    for (let word of vulgarWords)
    {
        // Check if the Word Appears in the String
        if (tokenizedString.includes(word)) return true;
    }

    // Return False if Nothing Detected
    return false;
}

module.exports = {
    GetVulgarWords,
    TokenizeString,
    DetectVulgarWords,
};