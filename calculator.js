// get display button
let input = "";
let result = "";
let displayBtn = document.querySelector(".display");
let oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//two button
let twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//three button
let threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//four button
let fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//five button
let fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//six button
let sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//seven button
let sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//eight button
let eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//nine button
let nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//zero button
let zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	console.log(input);
	displayBtn.innerText = input;
});

//minus button
let minusBtn = document.querySelector(".minus");
minusBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//slash button
let slashBtn = document.querySelector(".slash");
slashBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//equal button
let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function (event) {
	result = eval(input);
	input = result;
	displayBtn.innerText = input;
});

//plus button
let plusBtn = document.querySelector(".plus");
plusBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	displayBtn.innerText = input;
});

//clear button
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function (event) {
	input = "";
	displayBtn.innerText = "0";
});

//times button
let timeBtn = document.querySelector(".time");
timeBtn.addEventListener("click", function (event) {
	input = input + event.target.innerText;
	console.log(event.target);
	displayBtn.innerText = input;
});
