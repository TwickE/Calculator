let result = document.getElementById('result');

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        if(button.value === 'C') {
            result.value = '';
        }else if(button.value === 'D') {
            result.value = result.value.slice(0, -1);
        }else if(button.value === '=') {
            result.value = eval(result.value);
        }else {
            result.value += button.value;
        }
    });
});

document.addEventListener("keydown", function(event) {
    if(event.key == "Backspace") {
        result.value = result.value.slice(0, -1);
    } else if(event.key == "c" || event.key == "C") {
        result.value = '';
    } else if(!isNaN(event.key)) {
        result.value += event.key;
    } else if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" || event.key == "%") {
        result.value += event.key;
    } else if(event.key == "." || event.key == ",") {
        result.value += ".";
    }
});