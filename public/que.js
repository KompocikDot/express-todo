const edt = $('#edit-form');
const add = $('#add-form');

$("#edit-form").hide();

$('body > div.list-group > div > div > button').click(function () { 
    let id = $(this).find('input[name="edit"]').val();
    let todo = $(this).parent().find('h5').text();
    $('#edit').attr("action", `/edit/${id}`);
    edt.find('h2').text(`EDYTUJ ZADANIE: ${todo.toUpperCase()}`);
    add.hide();
    edt.show();
});

$('.btn-close').click(function(){
    edt.hide();
    add.show();
});


edt.submit(function(e){
    if ($(this).find('input[name="todo"]').val().match(/^\s*$/)) {
        e.preventDefault();
    }
});

add.submit(function(e){
    if ($(this).find('input[name="todo"]').val().match(/^\s*$/)) {
        e.preventDefault();
    }
});