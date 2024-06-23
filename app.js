//  ------------------------ Chapter 14 To 16 Assignment Started ---------------------

//  ------------------------------- Question # 01 To 07 ------------------------------------

var studentNames = [];
var studentNames = {
    array: []
  };
var stringsArray = ["apple", "banana", "orange", "grape"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, true, false];
var mixedArray = ["apple", 3, true, "banana", false];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2> Educational Qualifications in Pakistan: </h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

//  ------------------------------- This Task Completed Here ---------------------------


//  ------------------------------- Question # 08 --------------------------------------

var studentNames = ["Ahmed ", "Mustufa", "Kashan"];
var studentScores = [400, 440, 390];
var totalMarks = 500;
var percentages = [];

for (var i = 0; i < studentScores.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    percentages.push(percentage.toFixed(2));
}

document.write("<h2> Student Scores and Percentages: </h2>");
document.write("<table>");
document.write("<tr><th> Student Name </th><th> Score</th> <th> Percentage </th></tr>");
for (var i = 0; i < studentNames.length; i++) {
    document.write("<tr>");
    document.write("<td>" + studentNames[i] + "</td>");
    document.write("<td>" + studentScores[i] + "</td>");
    document.write("<td>" + percentages[i] + "%</td>");
    document.write("</tr>");
}
document.write("</table>");

//  ------------------------------- This Task Completed Here ---------------------------


//  ------------------------------- Question # 09 --------------------------------------

var colors = ["Red", "Green", "Blue", "Purple"];
var originalArrayColor = "<h2> Original Array: </h2>";
document.write(originalArrayColor);

var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);

var arrayAfterAddBeginning = "<h2> Array after adding color to the beginning: </h2>" + colors.join(" ");
document.write(arrayAfterAddBeginning);

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

var arrayAfterAddEnd = "<h2> Array after adding color to the end:</h2>" + colors.join(" ");
document.write(arrayAfterAddEnd);

var colorsToAddBeginning = ["Purple", "Yellow"];
colors.unshift(...colorsToAddBeginning);

var arrayAfterAddTwoBeginning = "<h2>Array after adding two more colors to the beginning:</h2>" + colors.join(" ");
document.write(arrayAfterAddTwoBeginning);

colors.shift();

var arrayAfterDeleteFirst = "<h2> Array after deleting the first color:</h2>" + colors.join(" ");
document.write(arrayAfterDeleteFirst);

colors.pop();

var arrayAfterDeleteLast = "<h2> Array after deleting the last color: </h2>" + colors.join(" ");
document.write(arrayAfterDeleteLast);

var indexToAddColor = +prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAddColor, 0, colorToAdd);

var arrayAfterAddCustom = "<h2>Array after adding color at user-defined position:</h2>" + colors.join(" ");
document.write(arrayAfterAddCustom);

var indexToDelete = +prompt("Enter the index to delete color(s) from:");
var numberOfColorsToDelete = +prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);

var arrayAfterDeleteCustom = "<h2>Array after deleting color(s) from user-defined position:</h2>" + colors.join(" ");
document.write(arrayAfterDeleteCustom);

//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 10 --------------------------------------

var studentScores = [85, 72, 90, 65, 78];

document.write("<h2> Original Array: </h2>");
document.write(studentScores.join(", "));

studentScores.sort();

document.write("<h2> Sorted Array (Ascending Order): </h2>");
document.write( studentScores.join(", "));

//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 11 --------------------------------------

var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

document.write("<h2> Original Cities Array: </h2>");
document.write( cities.join(", "));

var selectedCities = [];

selectedCities = cities.slice(0, 3);

document.write("<h2> Selected Cities Array: </h2>");
document.write( selectedCities.join(", "));

//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 12 --------------------------------------

var arr = ["This", "is", "my", "cat"];
document.write( "<h2> Array: </h2>  " + arr.join(", "));

var singleString = arr.join(" ");
document.write( "<h2> String: </h2>");

document.write( singleString );

//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 13 --------------------------------------

var fifoArray = ["Mouse", "Keyboard", "Printer", "Moiniter",];

// Add values to the array (FIFO - First In First Out)
fifoArray.push("Value1");
fifoArray.push("Value2");
fifoArray.push("Value3");
fifoArray.push("Value4");

// Access and remove values in FIFO order
var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var forthValue = fifoArray.shift();

document.write("<p>First Value: " + firstValue + "</p>");
document.write("<p>Second Value: " + secondValue + "</p>");
document.write("<p>Third Value: " + thirdValue + "</p>");
document.write("<p>Forth Value: " + forthValue + "</p>");

//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 14 --------------------------------------

var lifoArray = ["Mouse", "Keyboard", "Printer", "Moiniter",];

// Add values to the array (LIFO - Last In First Out)
lifoArray.push("Value1");
lifoArray.push("Value2");
lifoArray.push("Value3");
lifoArray.push("Value4");

// Access and remove values in LIFO order
let forthValue = lifoArray.pop();
let thirdValue = lifoArray.pop();
let secondValue = lifoArray.pop();
let firstValue = lifoArray.pop(); 

document.write("<p>First Value: " + firstValue + "</p>");
document.write("<p>Second Value: " + secondValue + "</p>");
document.write("<p>Third Value: " + thirdValue + "</p>");
document.write("<p>Forth Value: " + forthValue + "</p>");


//  ------------------------------- This Task Completed Here ---------------------------


//  -------------------------------  Question # 15 --------------------------------------

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectMenuHTML = "<select>";

for (var i = 0; i < phoneManufacturers.length; i++) {
    selectMenuHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}

selectMenuHTML += "</select>";

document.write(selectMenuHTML);

//  ------------------------------- This Task Completed Here ---------------------------


//  ------------------------ Chapter 14 To 16 Completed Here ----------------------------