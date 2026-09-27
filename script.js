const divNumber = document.querySelector(".div-number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
let number = 0;

function colorManipulation() {
	if (number === 0) {
		divNumber.classList.add("black");
		divNumber.classList.remove("green");
		divNumber.classList.remove("red");
	}
	if (number > 0) {
		divNumber.classList.add("green");
        divNumber.classList.remove("black")
        divNumber.classList.remove("red")
	}
	if (number < 0) {
		divNumber.classList.add("red");
        divNumber.classList.remove("green")
        divNumber.classList.remove("black")
	}
}

increase.addEventListener("click", () => {
	number++;
	colorManipulation();
	divNumber.innerHTML = number;
});

decrease.addEventListener("click", () => {
	number--;
	colorManipulation();
	divNumber.innerHTML = number;
});

reset.addEventListener("click", () => {
	number = 0;
	divNumber.innerHTML = number;
	divNumber.classList.add("black");
});
