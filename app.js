/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector(".display");
const cantFirst = ["0", "=", "-", "+", "/", "*"];
/*-------------------------------- Variables --------------------------------*/
let all = document.querySelectorAll(".button");
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/
all.forEach((button) => {
  button.addEventListener("click", (event) => {
    let number = event.target.textContent;
    if (number !== "=" && number !== "C") {
      if (display.textContent == "" && cantFirst.includes(number) == true) {
      } else {
        display.textContent += number;
      }
    }
    if (number == "=" && number !== "C") {
      display.textContent = eval(display.textContent);
    }
    if (number == "C") {
      display.textContent = "";
    }
  });
});
//if a number is inserted to the output with no operators between them number will be missed
