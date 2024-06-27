let final = 0;
let oppo = 1;
let type;
let count1 = 0;
let count2 = 0;
let arr1 = [];
let arr2 = [];
let num1 = 0;
let num2 = 0;
// this bad boi here makes sure that after making a lil equation and getting and outcome the next click on a number will just make it appear by itself
let theResetBoi = [];
sum = 0;
let operations = ["+", "C", "-", "/", "*", "="];

let all = document.querySelectorAll(".button");
all.forEach((button) => {
  button.addEventListener("click", (event) => {
    let number = event.target.innerText;
    // this is for the first number
    if (operations.includes(number) == false && oppo == 1 && final == 0) {
      if (theResetBoi[theResetBoi.length - 1] == 1) {
        document.querySelector(".display").innerText = "";
      }
      arr1.push(number);
      document.querySelector(".display").innerText =
        document.querySelector(".display").innerText + arr1[count1];
      count1++;
      theResetBoi.push(0);
    }
    // thos for the operation checking
    if (
      operations.includes(number) &&
      number !== "=" &&
      number !== "C" &&
      oppo == 1 &&
      count1 >= 1 &&
      final == 0
    ) {
      oppo++;
      type = number;
      document.querySelector(".display").innerText =
        document.querySelector(".display").innerText + type;
    }
    if (operations.includes(number) == false && oppo == 2) {
      arr2.push(number);
      document.querySelector(".display").innerText =
        document.querySelector(".display").innerText + arr2[count2];
      count2++;
    }

    if (number == "=" && oppo == 2 && final == 0) {
      final = 1;
      num1 = arr1.join("");
      num2 = arr2.join("");
      sum = eval(`${num1}${type}${num2}`);

      document.querySelector(".display").innerText = sum;
      console.log(sum);
      final = 0;
      oppo = 1;
      type = undefined;
      count1 = 0;
      count2 = 0;
      arr1 = [];
      arr2 = [];
      num1 = 0;
      num2 = 0;
      sum = 0;
      theResetBoi.push(1);
    }
    if (number == "C") {
      final = 0;
      oppo = 1;
      type = undefined;
      count1 = 0;
      count2 = 0;
      arr1 = [];
      arr2 = [];
      num1 = 0;
      num2 = 0;
      sum = 0;
      theResetBoi = [];
      document.querySelector(".display").innerText = "";
    }
  });
});
