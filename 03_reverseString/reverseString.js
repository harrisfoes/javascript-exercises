const reverseString = function(myString) {
    let resultString = '';
    //split the array into strings
    const splitString = myString.split("");
    //iterate from the last character to the first
    for(let i = splitString.length-1; i >= 0 ; i--){
        resultString = resultString + splitString[i];
    }

    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
