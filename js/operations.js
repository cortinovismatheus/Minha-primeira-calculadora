export function calculate(number_before, current_number, operator) {
    let result;

    if (operator === "+") {
        result = Number(number_before) + Number(current_number);

    } else if (operator === "-") {
        result = Number(number_before) - Number(current_number);

    } else if (operator === "*") {
        result = Number(number_before) * Number(current_number);

    } else if (operator === "/") {
        result = Number(number_before) / Number(current_number);
    } 
    
    return result.toString();
}