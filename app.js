function calc() {
    let input = parseInt(document.getElementById("input").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let operator = document.getElementById("operators").value;

    if (operator === "+") {
        document.getElementById("result").value = input + input2
    } if (operator === "-") {
        document.getElementById("result").value = input - input2
    } if (operator === "x") {
        document.getElementById("result").value = input * input2
    } if (operator === "/") {
        document.getElementById("result").value = input / input2
    }

}