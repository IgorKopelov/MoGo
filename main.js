"use strict";

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiplay = document.getElementById('buttonMultiplay');
let buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');



function onButtonPlusClick() {
  var number1 = Number('input1.value');
  var number2 = Number('input2.value');

  var summ = number1 + number2;
 window.alert(summ);

}
function onButtonMinusClick() {
  var number1 = Number('input1.value');
  var number2 = Number('input2.value');

  var summ = number1 - number2;
  window.alert(summ);
}
function onButtonMultiplayClick() {
  var number1 = Number('input1.value');
  var number2 = Number('input2.value');

  var summ = number1 * number2;
  window.alert(summ);
}
function onButtonDevideClick() {
  var number1 = Number('input1.value');
  var number2 = Number('input2.value');

  var summ = number1 / number2;
  window.alert(summ);
}

buttonPlus.addEventListener('click',onButtonPlusClick);
buttonMinus.addEventListener('click',onButtonMinusClick);
buttonMultiplay.addEventListener('click',onButtonMultiplayClick);
buttonDevide.addEventListener('click',onButtonDevideClick);