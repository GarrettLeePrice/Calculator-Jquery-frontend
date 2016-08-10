alert("First line of scripts")
// // Add
var add = function(number1, number2) {return number1 + number2;};
// // var number1 = parseInt(prompt("Enter a number:"));
// // var number2 = parseInt(prompt("Enter another number:"));
// debugger;
// // alert(add(number1, number2));
// // Subtract
var subtract = function(number1, number2) {return number1 - number2;};
// // var number1 = parseInt(prompt("Enter a number:"));
// // var number2 = parseInt(prompt("Enter another number:"));
// // Multiply
var multiply = function(number1, number2) {return number1 * number2;};
// // var number1 = parseInt(prompt("Enter a number."));
// // var number2 = parseInt(prompt("Enter anther number."));
// // Divide
var divide = function(number1, number2) {return number1 / number2;};
// // var number1 = parseInt (prompt("Enter a number."));
// // var number2 = parseInt (prompt("Enter another number."));
// //Result
// var result = add(number1, number2);
// // alert(result);
//
$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});

//
//
alert("last line of scripts")
