const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = " ";

const calculate = (buttonVal) => {
    if (buttonVal === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (buttonVal === "AC"){
        output = ""
    } else if (buttonVal ==="DEL"){
        output=output.toString().slice(0,-1);
    } else {
        if (output === "" && specialChars.includes(buttonVal)) return;
        output += buttonVal;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});