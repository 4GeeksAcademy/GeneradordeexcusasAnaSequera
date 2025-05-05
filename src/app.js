import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; 

let who = ['Alejandra', 'Ana', 'David', 'Juan']
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car','my kitchen'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRamdonNumber(a,b){
  return Math.floor(Math.random() * (b - a) + a);
}

function getRamdon(anyArray){
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRamdonNumber (min, max);
  return anyArray[random];
}
window.onload = function() {
  //write your code here
 document.querySelector('#excuse').innerHTML = getRamdon(who) + " " + getRamdon(action) + " " + getRamdon(what) + " "+ getRamdon(when);

};
