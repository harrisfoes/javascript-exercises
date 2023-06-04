const fibonacci = function(number) {
    let x = 0, y = 1, lastnum = 1;
    let num = parseInt(number);

    if(num < 0)
        return "OOPS"

    for(i = num; i>1; i--){
        lastnum = x + y;
        //console.log(i);
        //console.log(lastnum);
        x = y;
        y = lastnum;
    }
    return lastnum
};

// Do not edit below this line
module.exports = fibonacci;
