const findTheOldest = function(people) {
    const ages = people.sort(function(a,b) {
        let a_yearOfDeath = a.yearOfDeath;
        let b_yearOfDeath = b.yearOfDeath;

        if(a_yearOfDeath == null)
            a_yearOfDeath = new Date().getFullYear();
        if(b_yearOfDeath == null)
            b_yearOfDeath = new Date().getFullYear();
         
        const age_a = a_yearOfDeath - a.yearOfBirth;
        const age_b = b_yearOfDeath - b.yearOfBirth;

        return age_b - age_a;
    });

    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
