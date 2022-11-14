const removeFromArray = function(myArray, ...toRemove) {
    const args = Array.from(toRemove);
    console.log(args);
    console.log(myArray);

    let returnArray = myArray;

    for(i of args){
        console.log(`i: ${i}`)
        for(let j = 0;j<myArray.length;j++){
            console.log(`char: ${myArray[j]}`);
            if(i === myArray[j]){
                returnArray.splice(j,1);
                console.log(returnArray);
            }
        }
    }

    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
