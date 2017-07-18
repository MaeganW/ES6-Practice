var numbers = [1, 2, 3, 4, 5];

// === COMPARE FOREACH AND MAP ===

//numbers.forEach(function(num){
//    console.log(num);
//});

//var showNumbers = numbers.map(function(num){
//    return num;
//});
//
//console.log(showNumbers);

//var doubled = numbers.map(function(num){
//    return num*2;
//});
//
//console.log(doubled);


var cars = [
    {
        model: 'Buick',
        price: 'cheap'
    },
    {
        model: 'Camaro',
        price: 'expensive'
    },
    {
        model: 'Hyundai',
        price: 'moderate'
    }
];

//var prices = cars.map(function(car){
//    return car.price;
//});
//console.log(prices);


var paints = [{
    color: 'red',
    transparency: '.5'
}, {
    color: 'blue',
    transparency: '.5'
}, {
    color: 'yellow',
    transparency: '.5'
}];

//var colors = paints.map(function(obj){
//    return obj.color;
//});
//console.log(colors);

// === MY CODE === THIS WORKDS
//function pluck(array, property){
//    var newArray = array.map(function(obj){
//        return obj[property];
//    });
//    return newArray;
//}

// === SOMEONE ELSE'S === THIS ALSO KINDA WORKS...?
//function pluck(array, property) {  
//  return array.map(function(object){
//     return object[property]; 
//  });
//}

//pluck(paints, 'color');



// === FILTER METHOD ===

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
});

console.log(lessThanFifteen);

function reject(array, iteratorFunction) {
    return array.filter(function (something) {
        return !iteratorFunction(something);
    });
}

// === REDUCE + FIND METHOD ===

var numbers = [1, 1, 2, 3, 4, 4];

// returns [1, 2, 3, 4]

function unique(array) {
    return array.find(function (something) {
        return
    });
}


//Using the rest operator

function join(...args) {
    return args[0].concat(args[1]);
}
console.log(join(['a', 'z'], [1, 2, 3]));
//args represents an unspecified number of arrays

function unshift(array, ...args) {
    return [...args, ...array];
}


//===DESTRUCTURING===

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer({
    title,
    department
}) {
    return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);


//===MORE DESTRUCTURING===

const nums = [1, 2, 3];

function double([a, b, c]) {
    return [a * 2, b * 2, c * 2];
}

console.log(double(nums));


//===USING CLASSES===

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
    growl(){
        console.log('GRRRRRR');
    }
}

var arachnid = new Monster({
    name: 'Arachnid'
});


class Snake extends Monster {
    bite() {
        this.health -= 10;
        console.log('MWAHAHAHAHA!!'); //okay, why is this being called here?
    }
    laugh (){
        console.log('MWAHAHAHAHA!!');
    }
}

var anaconda = new Snake({
    name: 'anaconda'
});

console.log(anaconda.growl());
console.log(anaconda);
console.log(anaconda.health);
console.log(anaconda.laugh());
console.log(anaconda.bite());

