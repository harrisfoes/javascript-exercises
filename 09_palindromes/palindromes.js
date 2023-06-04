const palindromes = function (word) {
    const filteredWord = word.split(' ').join('').replace(/[^a-z0-9_]/gi,'').toLowerCase();
    const reverseWord = filteredWord.split("").reverse();
    let palindromCheck = false;
    let matchCount = 0;

    for(let i in filteredWord){
        if(filteredWord[i] == reverseWord[i])
            matchCount +=1;
    }
    if(matchCount == filteredWord.length)
        palindromCheck = true;
    
    return palindromCheck;

};

// Do not edit below this line
module.exports = palindromes;
