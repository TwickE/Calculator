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