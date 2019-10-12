// var numAmount = prompt("How many characters would you like your password to be?");
// var speChar = confirm("Would you like to add special characters?");
// var numConfirm = confirm("Would you like to include numbers?");


var char = "abcdefghijklmnopqrstuvwxyzAMBDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()+";

var numAmount = document.getElementById("numAmount");
var speChar = document.getElementById("speChar");
var numConfirm = document.getElementById("numConfirm");
var yourPw = document.getElementById("yourPw");

function password(numAmount, speChar, numConfirm){
    var pwd = " ";
    for (var i = 0; i < 129; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
