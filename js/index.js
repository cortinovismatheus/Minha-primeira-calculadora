import { calculate } from "./operations.js";
import { updateDisplay } from "./display.js";

const num = document.querySelectorAll(".button-number");
const operators = document.querySelectorAll(".button-operators");
const fun = document.querySelectorAll(".button-fun");
const display = document.querySelector("#res p");
const max_length = 24;

let current_number = "";
let number_before = "";
let operator = null;

// números
num.forEach(button => {
    button.addEventListener('click', () => {
        
        const value = button.textContent;

        if (current_number.length >= max_length) return;

        if (value ==="."){
            if(current_number.includes(".")) return

            if(current_number === "" || current_number === "0"){
                current_number ="0."
            }else{
                current_number += "."
            }
        }else{
            if (current_number === "0"){
                current_number = value
            }else{
                current_number += value
            }
        }

        updateDisplay(display, current_number);
    });
});

// operadores
operators.forEach(button => {
    button.addEventListener("click", () => {

        if (current_number === "") return;

        if (number_before !== "") {
            current_number = calculate(number_before, current_number, operator);
            updateDisplay(display, current_number);
        }else if (button.textContent === "%") {

            if (current_number === "") return;

            if (number_before !== "") {
                current_number = String(
                    (Number(number_before) * Number(current_number)) / 100
                );
            } else {
                current_number = String(Number(current_number) / 100);
            }

            updateDisplay(display, current_number);
        }

        operator = button.textContent;
        number_before = current_number;
        current_number = "";
    });
});

// funções
fun.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent === 'AC') {
            current_number = "0";
            number_before = "";
            operator = null;
            updateDisplay(display, current_number);

        } else if (button.textContent === "⌫") {
            current_number = current_number.slice(0, -1);
            if (current_number === "") current_number = "0";
            updateDisplay(display, current_number);

        } else if (button.textContent === "±") {
            current_number = String(Number(current_number) * -1);
            updateDisplay(display, current_number);

        } else if (button.textContent === "=") {
            if (number_before !== "" && current_number !== "") {
                current_number = calculate(number_before, current_number, operator);
                updateDisplay(display, current_number);
                number_before = "";
                operator = null;
            }
        }

    });
});
