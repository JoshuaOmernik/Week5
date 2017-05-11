console.log("Hello World from main.js!");

// A function that receives 2 arguments (numbers), adds them together, and console logs the answer.

//var addTogether = function(num1, num2){
//	console.log(num1 + num2)
//addTogether(5,2);

// A function that receives 1 argument (numbers), multiplies it by 2, and returns the answer.

//var multiplyTwo = function(num){
//	return num*2
//}
//var total = multiplyTwo(56);
//console.log(total);

// A variable set to an array of strings, each one a common first name.

//var firstName = [
//	"Chuck",
//	"Joe",
//	"William",
//	"Peter",
//	"Guy",
//	"Gregg",
//];

// A function that console logs the first item in an array (the array you created above), then takes that item and moves it 
// to the back of the array. Calling the function over and over should log each item in the array in turn, going back to the 
// start after the last item, infinitely.

//function takeAndReplace(){
//	console.log(firstName[0]);
//	firstName.push(firstName.shift());
//}
//console.log(firstName[0])

// A variable set to an array of numbers.

//var numbers = [
//	1,
//	25,
//	55,
//	2,
//	42,
//	9,
//];


// A function that finds the highest number in an array of numbers and console logs it.

//numbers.max = function(numbers){
//	console.log(Math.max.apply(Math, numbers));
//}

// A function that receives two strings, trims them (look it up), and then returns true if they match AND are not empty, 
// otherwise returns false. This is a common function used in user registration forms, for the password and password again fields.

//var myEmail = function(email1, email2) {
//	email1 = email1.trim();
//	email2 = email2.trim();
//	if (email1 === email2 && email1){
//		return true;
//	} else
//	return false;
//}

// A function that rounds any number to the nearest multiple of 42 and returns it. This one has some math in it.

//function roundTo(n){
//	if(n > 0)
//		return Math.ceil(n/42.0) * 42;
//	else if (n < 0)
//		return Math.floor(n/42.0) * 42;
//	else
//		return 42;
//}

// A function that logs â€œThe answer to the question is â€ followed by whatâ€™s returned from the above function with 37 
// as the argument.

//function roundTo(n){
//	if(n > 0)
//		return Math.ceil(n/37.0) * 37;
//	else if (n < 0)
//		return Math.floor(n/37.0) * 37;
//	else
//		return 37;
//}

// A function that receives one argument, and logs something different depending of if the number is above 212, below 32, 
// or in between. 

//function thisFunction(x){
//	if (x > 212) {
//		console.log("BIG")
//	}else if (x < 32){
//		console.log("LOW")
//	}else if (x <= 212 && x >= 32){
//		console.log("MIDDLE")
//	}
//}

// A function that receives 3 strings, a noun, a verb, and an adjective, and logs a sentence constructed with those words 
// inserted.

//function words(str1,str2,str3){
//	str1 = "The Nurse";
//	str2 = "started to run";
//	str3 = "bravely.";
//	console.log(str1 + " " + str2 + " " + str3)
//}
//words()


// A function that receives one argument, an array, and returns true if the array has more than 3 items, false if not.

//var arrayThings = [
//	1,
//	"Kyle",
//	"Kite",
//	5,
//	"Chips",
//];

//function threeItems(){
//	if(arrayThings.length > 3){
//		return true
//	}else{
//		return false
//	}
//}

// A function that receives one argument, an array of numbers, and returns true if any item in the array equals 42.

//var numbersArray =[
//	1,
//	55,
//	2,
//	18,
//	5,
//];

//function anyEquals(){
//	if(numbersArray.includes(42)){
//		return true
//	}else{
//		return false
//	}
//}

// A function that receives two arguments, a number and a string, and logs the string to the console the number of times 
// in the number argument.

//function twoArguments(x, str1){
//	str1 = "Wow";
//	console.log(str1)
//}
//twoArguments(5)

//var b = 5
//for(var i = 0; i < 5; i++)
//console.log("Wow")

// A function that console logs a phrase that gets funnier to more you read it.

//function funnyPhrase(){
//	console.log("Hue")
//	console.log("Hehe")
//	console.log("Hahaha")
//	console.log("Muhahahaha")
//	console.log("RoflCopter")
//}

// A function that sets a timeout for 5 seconds, which calls the above function.

//var timeoutID = setTimeout(funnyPhrase, 5000)


// A function that has a loop that happens 5 times, and each time it sets a timeout, each timeout a different random length 
// between 1 and 5 seconds, to call the funny phrase function. (look up Math.random for random number generation)

//function funnyLoop(){
//for (i = 0; i < 5; i++){
//	setTimeout( funnyPhrase, Math.random()* 4000 + 1000);
//}
//}
// A variable set to an array containing every letter in the alphabet (as strings) and every number for 0 through 9.

//var alphabetNumber =[
//	"a",
//	"b",
//	"c",
//	"d",
//	"e",
//	"f",
//	"g",
//	"h",
//	"i",
//	"j",
//	"k",
//	"l",
//	"m",
//	"n",
//	"o",
//	"p",
//	"q",
//	"r",
//	"s",
//	"t",
//	"u",
//	"v",
//	"w",
//	"x",
//	"y",
//	"z",
//	0,
//	2,
//	1,
//	3,
//	4,
//	5,
//	6,
//	7,
//	8,
//	9,
//];

// A function that picks a random item from the above array and returns it.

//function randomPick(){
//	return alphabetNumber[Math.floor(Math.random()*alphabetNumber.length)];
}


// A function that calls the above function 8 times, each time adding the returned value to a string, generating an eight 
// character long random alphanumeric string.

//function doTimes(number) {
//		var newString = ""; 
//    for (var i = 0; i < number; i++) {
//    	newString = newString + randomPick()
//    	console.log(newString)
//        randomPick(i); 
//    }
//}

//doTimes(8);



// A variable called counter, thatâ€™s just the number 0.

var counter = 0

// A function that adds 0.5 to that last number variable, then console logs it, but only if the number is still below 1000.

function addVariable(){
	while ( counter < 1000) {
		console.log( counter + .5);
		counter += .5;
	}
}

// A function that sets an interval for 1/30th of a second to call that last function. Once you get that working, 
// consider how you might use logic like this to animate something on a webpage, such as the css left value of an element, 
// making it slide to the right. Yep, animation is not really that complex.

function intervalSet(){
	var timeoutID = setInterval(addVariable, 33);
}

// A function that cancels that timeout. Obviously, youâ€™ll need to call it pretty quickly after starting the timeout to see the effect.

function clearTimeout(){
	var clear = clearInterval( timeoutID )
}

// Bonus: Here's some code to fetch a DIV from the DOM, and adjust it's css left value. 
// Work that into your interval function to make some animation happen.
	// document.getElementById("myDiv").style.left = "100px";


