function greetings(name){
	name = prompt("Hello, What is your name?");
	alert("Welcome " + name);
}

greetings();

function operation(ops){
if(ops == 1){

	var add = function(number1, number2){
		return number1 + number2;
	};

	number1 = parseInt(prompt("Enter number"));

	number2 = parseInt(prompt("Enter another number"));

	alert("The sum of the two is: " + add(number1, number2));
}

else if(ops == 2){
	var subtract = function(number1, number2){
		return number1 - number2;
	};

	number1 = parseInt(prompt("Enter number"));

	number2 = parseInt(prompt("Enter another number"));

	alert("The difference is: " + subtract(number1, number2));
}

else if(ops == 3){
	var multiply = function(number1, number2){
		return number1 * number2;
	};

	number1 = parseInt(prompt("Enter number"));

	number2 = parseInt(prompt("Enter another number"));

	alert("The product of the two is: " + multiply(number1, number2));
}

else{
	var divide = function(number1, number2){
		return number1 / number2;
	};

	number1 = parseInt(prompt("Enter number"));

	number2 = parseInt(prompt("Enter another number"));

	alert("The result is: " + divide(number1, number2));
}

}

operation(prompt("To add type '1', To subtract type '2', To multiply type '3', To divide type '4'"));

var test = confirm("Peform more calculations?")

if (test === true){
		operation(prompt("To add type '1', To subtract type '2', To multiply type '3', To divide type '4'"));
}
