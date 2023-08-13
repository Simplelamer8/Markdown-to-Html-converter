var input_val = document.querySelector('#user_input');
var output_val = document.querySelector('#result');

if (localStorage.length != 0)
{
    $('#user_input').value = localStorage.getItem('text');
}

$('#user_input').keyup(function(){
    localStorage.setItem('text', $('#user_input').value);
    document.querySelector('#result').value = marked.parse(document.querySelector("#user_input").value);
})

$('.copy_input').click(function(){
    input_val.select();
    input_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input_val.value);
})

$('.copy_output').click(function(){
    output_val.select();
    output_val.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output_val.value);
})
