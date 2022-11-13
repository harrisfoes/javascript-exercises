const repeatString = function(myString, timesToRepeat) {
    let endString = '';

    if(timesToRepeat < 0)
        endString = 'ERROR'
    else{
        for(let i = 0; i<timesToRepeat;i++){
            endString = endString + myString;
        }
    }

    return endString;
};

// Do not edit below this line
module.exports = repeatString;
