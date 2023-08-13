var input_val = document.querySelector('#user_input');
var output_val = document.querySelector('#result');

if (localStorage.length != 0)
{
    input_val.value = localStorage.getItem('text');
}

input_val.addEventListener('keyup', () => {
    localStorage.setItem('text', input_val.value);
    document.getElementById('result').value = marked.parse(document.getElementById("user_input").value);
})

var input = document.querySelector('.copy_input');
var output = document.querySelector('.copy_output');

input.addEventListener('click', () => {
    input_val.select();
    input_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input_val.value);
})

output.addEventListener('click', () => {
    output_val.select();
    output_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output_val.value);
})