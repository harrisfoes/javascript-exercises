const sumAll = function(smol, large) {
 let sum = 0;
 
 if( !Number.isInteger(smol) || smol < 0 || !Number.isInteger(large) || large < 0)
    return 'ERROR';
 
 if (smol > large){
    let temp = smol;
    smol = large;
    large = temp;
 }

 for(let i = smol; i<=large; i++){
    sum += i;
 }

 return sum;

};

// Do not edit below this line
module.exports = sumAll;
