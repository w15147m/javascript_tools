const Q1 = "Qs.1:   For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class." ;


var write_q= document.getElementById("write_q");
var write_sum= document.getElementById("sum");
var write_count= document.getElementById("count");
var write_avg= document.getElementById("avg");
write_q.innerHTML = "";
write_avg.innerHTML = "";
write_count.innerHTML = "";
write_sum.innerHTML = "";

let marks =[85, 97, 44, 37, 76, 60];
let sum = 0;
let conter = 0;
marks.forEach(element => {
    conter++;
    sum += element;
});

const avg = sum/conter;
write_q.innerHTML = Q1;
write_sum.innerHTML = "sum of marks =" + sum;
write_count.innerHTML = "totla sub =" + conter;
write_avg.innerHTML = "avg = "+ avg;


const Q2 = "Qs.2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer." ;

var write_q1= document.getElementById("write_q1");
write_q1.innerHTML = "";
write_q1.innerHTML = Q2;

let prices = [250, 645, 300, 900, 50];
let OFF = 10;
let OFF_prices = [];

prices.forEach(element => {
    element = element - (element * OFF / 100);
    OFF_prices.push(element);
    
});

var price= document.getElementById("price");
var off_price= document.getElementById("off_price");
price.innerHTML = `real price  ${prices}`;
off_price.innerHTML = `final price after applying offer ${OFF_prices}`;
console.log(OFF_prices);

