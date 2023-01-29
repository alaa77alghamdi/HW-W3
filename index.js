"use strict";
exports.__esModule = true;
var car1 = {
    make: ' Toyota  ',
    model: 'Corolla',
    year: 2003,
    honk: function () {
        return "Toyota Corolla 2003";
    }
};
var car2 = {
    make: 'KIA',
    model: 'Picanto',
    year: 2019,
    honk: function () {
        return "KIA Picanto 2019";
    }
};
var car3 = {
    make: 'Hyundai',
    model: 'Elantra',
    year: 2010,
    honk: function () {
        return "Hyundai Elantra 2010";
    }
};
var arry = [car1, car2, car3];
console.log(arry);
for (var i = 0; i < arry.length; i++) {
    var arry2 = "";
    console.log(arry[i].year);
}
for (var i = 0; i < arry.length; i++) {
    var arry2 = "";
    console.log(arry[i].model);
}
