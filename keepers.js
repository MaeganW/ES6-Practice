function findWhere(array, criteria) {
  return array.find(function(something){
      var prop = Object.keys(criteria)[0];
      return something[prop] === criteria[prop];
  });
}

//EXAMPLE

//var ladders = [
//  { id: 1, height: 20 },
//  { id: 3, height: 25 }
//];
//
//findWhere(ladders, { height: 25 }); 

// result: { id:3, height: 25 }


function reject(array, iteratorFunction) {
    return array.filter(function(something){
        return !iteratorFunction(something);
    });
}

//EXAMPLE

//var numbers = [10, 20, 30];
//var lessThanFifteen = reject(numbers, function (number) {
//    return number > 15;
//});
//
//console.log(lessThanFifteen);


function pluck(array, property) {  
  return array.map(function(object){
     return object[property]; 
  });
}

//EXAMPLE

//var paints = [{
//    color: 'red',
//    transparency: '.5'
//}, {
//    color: 'blue',
//    transparency: '.5'
//}, {
//    color: 'yellow',
//    transparency: '.5'
//}];

//pluck(paints, 'color');


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;
}, 0);


//More Reduce - I am very proud of this solution :) 7/15/2017

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if(desk.type === 'sitting'){
        acc.sitting += 1;
    }
    if(desk.type === 'standing'){
        acc.standing += 1;
    }
    return acc;
}, { sitting: 0, standing: 0 });

