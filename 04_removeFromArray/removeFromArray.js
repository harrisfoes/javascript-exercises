const removeFromArray = function(myArray, ...toRemove) {
    const args = Array.from(toRemove);

    let returnArray = myArray;

    for(i of args){
        for(let j = 0;j<myArray.length;j++){
            if(i === myArray[j]){
                returnArray.splice(j,1);
            }
        }
    }

    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
