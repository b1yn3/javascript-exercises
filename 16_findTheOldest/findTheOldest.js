const findTheOldest = function(people) {
    let oldest = 0;
    let curr = 0;
    for(let i = 0; i < people.length; i++){
        if(people[i].yearOfDeath === undefined){
            people[i].yearOfDeath = 2025;
        }
        let temp = people[i].yearOfDeath - people[i].yearOfBirth;
        
        if(temp > oldest){
            oldest = temp;
            curr = i;
        }
    }
    return people[curr];
};

// Do not edit below this line
module.exports = findTheOldest;
