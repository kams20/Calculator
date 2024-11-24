

const input = document.querySelectorAll('.screen')[0];


function appendToInput(inputs) {
    input.value += inputs;
}


function clearInput() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch(err) {
        input.value = `Error`;
    }
}