let num1 = 8;
let num2 = 2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
var para = document.getElementById("sum-el");
function add(){
	
para.textContent =  (num1 + num2);	
}

function subtract(){
	
para.textContent =  (num1 - num2);
	
}

function divide(){

para.textContent =  (num1 / num2);
}

function multiply(){
	
para.textContent =  (num1 * num2);
	
	
}