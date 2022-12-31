const leapYears = function(year) {
    if(year % 4 != 0){ //divisible by 4 only
        return false;
    }
    
    if(year % 100 == 0){
        if (year % 400 == 0)
            return true;
        else 
            return false;
    }
    return true;

};


// Do not edit below this line
module.exports = leapYears;
