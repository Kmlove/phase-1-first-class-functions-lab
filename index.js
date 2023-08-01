// Code your solution in this file!
const returnFirstTwoDrivers = function (namesArray) {
  let firstTwoNames = namesArray.slice(0, 2);
  return firstTwoNames;
};

const returnLastTwoDrivers = function (namesArray) {
  let lastTwoNames = namesArray.slice(-2);
  return lastTwoNames;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(namesArray, cb){
    return cb(namesArray);
}