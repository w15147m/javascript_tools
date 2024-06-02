let marks = [12, 70, 93];
console.log(marks);
console.log(marks.length);

var dateParagraph = document.getElementById("dateParagraph");
dateParagraph.innerHTML = ""; // Clear existing content
printData();
function printData(){
    for (let index = 0; index < marks.length; index++) {
        dateParagraph.innerHTML += "Index " + index + " date is: " + marks[index] + "<br>";
    }
}
function pushData() {
    var push =  prompt("Are you wanna add new data");
    marks.push(push);
    dateParagraph.innerHTML += push +" is push <br>";
    printData();
}
function popData() {
   alert("Are you wanna delete last data");
    marks.pop();
    dateParagraph.innerHTML += " delete last data <br>";
    printData();
}
function shiftData() {
      alert("Are you wanna delete first data");
    marks.shift();
    dateParagraph.innerHTML += " delete first data <br>";
    printData();
}
function unshiftData() {
    var unshif =  prompt("Are you wanna add new data on frist");
    marks.unshift(unshif);
    dateParagraph.innerHTML += unshif +" is push <br>";
    printData();
}