/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let all = document.querySelectorAll(".button");
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/
all.forEach((button) => {
  button.addEventListener("click", (event) => {
    let number = event.target.textContent;
    if (number !== "=" && number !== "C") {
      document.querySelector(".display").textContent += number;
    }
    if (number == "=" && number !== "C") {
      document.querySelector(".display").textContent = eval(
        document.querySelector(".display").textContent
      );
    }
    if (number == "=" && number !== "C") {
      document.querySelector(".display").textContent = eval(
        document.querySelector(".display").textContent
      );
    }
    if (number == "C") {
      document.querySelector(".display").textContent = "";
    }
  });
});
//if a number is added to the output with no operators the number will be missed
