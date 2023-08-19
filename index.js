var input_val = document.querySelector('#user_input');
var output_val = document.querySelector('#result');

if (localStorage.length != 0)
{
    input_val.value = localStorage.getItem('text');
}

input_val.addEventListener('keyup', () => {
    localStorage.setItem('text', input_val.value);
    document.querySelector('#result').value = marked.parse(document.querySelector("#user_input").value);
})

document.querySelector('.copy_input').addEventListener('click', () => {
    input_val.select();
    input_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input_val.value);
})


document.querySelector('.copy_output').addEventListener('click', () => {
    output_val.select();
    output_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output_val.value);
})
