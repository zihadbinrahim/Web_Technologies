function addValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let text = document.getElementById("display").value;
    document.getElementById("display").value = text.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    if (expression !== "") {
        document.getElementById("display").value = eval(expression);
    }
}
